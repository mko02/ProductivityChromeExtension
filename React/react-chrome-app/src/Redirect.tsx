import { useEffect, useState } from "react";
import { getAllCategories } from "./utils";
import { PieChart } from "@mui/x-charts/PieChart";
import "./Redirect.css";

interface Category {
	Domain: string;
	Category: string;
}

function Redirect() {
	const [domainCategories, setDomainCategories] = useState<Category[]>([]);

	useEffect(() => {
		setDomainCategories(getAllCategories());
	}, []);

	const [domainTimeStorage, setDomainTimeStorage] = useState<{
		[key: string]: any;
	}>({});

	const [categoryTimeStorage, setCategoryTimeStorage] = useState<{
		[key: string]: any;
	}>({});

	useEffect(() => {
		chrome.storage.local.get(null, (data) => {
			var tabFocusEvents = data?.tabFocusEvents;
			var keys = Object.keys(tabFocusEvents);

			keys.forEach((domain: string) => {
				var events = tabFocusEvents[domain]["events"];
				var totalActiveTime = 0;
				var prevTimeStamp = null as Date | null;

				events.forEach((event: any) => {
					var timeStamp = new Date(event["timeStamp"]);

					if (prevTimeStamp !== null) {
						const duration =
							(timeStamp.getTime() - prevTimeStamp.getTime()) / 1000; // Difference in milliseconds
						if (duration > 0) {
							totalActiveTime += duration;
						}
						prevTimeStamp = null as Date | null;
					}
					prevTimeStamp = timeStamp;
				});

				var iconUrl = tabFocusEvents[domain]["icon"];

				if (iconUrl === undefined || iconUrl === "") {
					iconUrl = "https://www.google.com/favicon.ico";
				}

				var item = {
					totalDomainTime: totalActiveTime,
					icon: iconUrl,
					category: findCategory(domain),
				};

				setDomainTimeStorage((prevState) => ({
					...prevState,
					[domain]: item,
				}));

				if (categoryTimeStorage[item.category] === undefined) {
					categoryTimeStorage[item.category] = 0;
				} else {
					categoryTimeStorage[item.category] += totalActiveTime;
				}
			});
		});
	}, [domainCategories]);

	function findCategory(domain: string) {
		console.log("finding category for domain: ", domain);
		console.log("domainCategories: ", domainCategories);
		const result = domainCategories.find((item) => item.Domain === domain);
		return result ? result.Category : "Uncategorized";
	}

	function getDataForPieChart() {
		const data = Object.keys(categoryTimeStorage).map((category) => {
			return {
				id: category,
				value: categoryTimeStorage[category],
				label: category,
			};
		});
		return data;
	}

	return (
		<div className="main-container">
			{/* Display the all domain with category */}
			<h1> Productivity Screen Time </h1>
			<div className="sub-container">
				<div>
					<h2> Domain Category </h2>
					{Object.keys(domainTimeStorage).map((domain) => (
						<div key={domain}>
							<p>
								{domain} - {domainTimeStorage[domain].category}
							</p>
						</div>
					))}
				</div>
				<div>
					{/* Display the all category with total time */}
					<h1> Category Time </h1>
					{Object.keys(categoryTimeStorage).map((category) => (
						<div key={category}>
							<p>
								{category} - {categoryTimeStorage[category]}
							</p>
						</div>
					))}
				</div>
			</div>

			<PieChart
				series={[
					{
						data: getDataForPieChart(),
					},
				]}
				width={400}
				height={200}
			/>
		</div>
	);
}

export default Redirect;
