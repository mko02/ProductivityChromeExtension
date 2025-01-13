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

	const [domainTimeSession, setDomainTimeSession] = useState<{
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
				var timeSession = [] as any;

				events.forEach((event: any) => {
					var timeStamp = new Date(event["timeStamp"]);

					if (prevTimeStamp !== null) {
						const duration =
							(timeStamp.getTime() - prevTimeStamp.getTime()) / 1000; // Difference in milliseconds
						if (duration > 0) {
							totalActiveTime += duration;
						}

						// add prevTimeStamp, current timeStamp, and duration to domainTimeSession
						timeSession.push({
							prevTimeStamp: prevTimeStamp,
							currentTimeStamp: timeStamp,
							duration: duration,
						});

						prevTimeStamp = null as Date | null;
					}
					prevTimeStamp = timeStamp;
				});

				// add timeSession to domainTimeSession
				setDomainTimeSession((prevState) => ({
					...prevState,
					[domain]: timeSession,
				}));

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

	function displayDomainTimeSession() {
		// for each item in domainTimeSession
		return Object.keys(domainTimeSession).map(
			(domain) => (
				console.log(domainTimeSession[domain]),
				(
					<div key={domain}>
						<h2> {domain} </h2>

						{/* for each time session in domainTimeSession */}
					</div>
				)
			)
		);
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

			{/* Display the all domain with time session */}
			<h1> Domain Time Session </h1>
			{displayDomainTimeSession()}
		</div>
	);
}

export default Redirect;
