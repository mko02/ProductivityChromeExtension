import React, { useEffect } from "react";
import { useState } from "react";
import { getCurrentDomain } from "./utils";
import DomainItem from "./DomainItem";
import { time } from "console";
import { start } from "repl";

function App() {
	const [keys, setKeys] = useState<string[]>([]);
	const [domainStorage, setDomainStorage] = useState<{ [key: string]: any }>(
		{}
	);
	const [activeTimeStorage, setActiveTimeStorage] = useState<{
		[key: string]: any;
	}>({});
	const [domainTimeStorage, setDomainTimeStorage] = useState<{
		[key: string]: any;
	}>({});

	const [iconStorage, setIconStorage] = useState<{ [key: string]: any }>({});
	const [currentActiveDomain, setCurrentActiveDomain] = useState<string | null>(
		null
	);
	const [currentActiveDomainTime, setCurrentActiveDomainTime] =
		useState<number>(0);
	const [startTimer, setStartTimer] = useState<boolean>(false);
	const [maxTime, setMaxTime] = useState<number>(0);

	useEffect(() => {
		getCurrentDomain((url) => {
			setCurrentActiveDomain(url);
		});
	}, []);

	useEffect(() => {
		chrome.storage.local.get(null, (data) => {
			var tabFocusEvents = data?.tabFocusEvents;

			var keys = Object.keys(tabFocusEvents);
			var currentMaxTime = 0;

			keys.forEach((domain: string) => {
				var events = tabFocusEvents[domain]["events"];
				var totalActiveTime = 0;

				events.forEach((event: any) => {
					var startTime = new Date(event["focusStart"]);
					var endTime = new Date(event["focusEnd"]);
					const duration = (endTime.getTime() - startTime.getTime()) / 1000; // Difference in milliseconds
					if (duration > 0) {
						totalActiveTime += duration;
					}
				});

				var iconUrl = tabFocusEvents[domain]["icon"];

				if (iconUrl === undefined || iconUrl === "") {
					iconUrl = "https://www.google.com/favicon.ico";
				}

				var item = {
					totalDomainTime: totalActiveTime,
					icon: iconUrl,
				};

				currentMaxTime = Math.max(currentMaxTime, totalActiveTime);

				setDomainTimeStorage((prevState) => ({
					...prevState,
					[domain]: item,
				}));

				if (domain === currentActiveDomain) {
					setCurrentActiveDomainTime(totalActiveTime);
				}
			});

			setStartTimer(true);
			setMaxTime(currentMaxTime);
		});
	}, [currentActiveDomain]);

	// do every second
	useEffect(() => {
		if (!startTimer) return; // do not increment if active tab is not set

		const intervalId = setInterval(() => {
			setCurrentActiveDomainTime((prevTime) => prevTime + 1);
			if (maxTime < currentActiveDomainTime + 1) {
				setMaxTime(currentActiveDomainTime + 1);
			}
		}, 1000); // 1000ms = 1 second

		// Cleanup the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, [startTimer]);

	const displayStorage = () => {
		const filteredDomains = Object.fromEntries(
			Object.entries(domainTimeStorage).filter(
				([domain, item]) =>
					item.totalDomainTime > 0 &&
					domain !== currentActiveDomain &&
					domain != ""
			)
		);

		const sortedDomains = Object.entries(filteredDomains).sort(
			(a, b) => b[1].totalDomainTime - a[1].totalDomainTime
		);

		return (
			<div>
				<DomainItem
					domain={currentActiveDomain || ""}
					totalTime={currentActiveDomainTime}
					maxTime={maxTime}
					isCurrent={true}
					icon={domainTimeStorage[currentActiveDomain || ""]?.icon}
				/>
				{/* display only top 5 */}
				{sortedDomains.slice(0, 5).map(([domain, item]) => (
					<DomainItem
						domain={domain}
						totalTime={item.totalDomainTime}
						maxTime={maxTime}
						isCurrent={false}
						icon={item.icon}
					/>
				))}
			</div>
		);
	};

	return (
		// add a button top right, aligned with the Screen Time text

		<div
			className="App"
			style={{
				width: "500px",
				paddingLeft: "20px",
				paddingRight: "20px",
				paddingBottom: "10px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingRight: "10px",
				}}
			>
				<h1>Screen Time</h1>
				<button
					style={{
						backgroundColor: "#0d6efd",
						color: "#fff",
						border: "none",
						borderRadius: "5px",
						padding: "8px 12px",
						cursor: "pointer",
					}}
					onClick={() =>
						chrome.tabs.create(
							{ url: chrome.runtime.getURL("localhostTab.html") } // This opens NewFile.html in a new tab
						)
					}
				>
					Action
				</button>
			</div>

			{startTimer && displayStorage()}
		</div>
	);
}

const rectangleStyle = {
	border: "1px solid #ccc", // Border for visibility
	borderRadius: "5px", // Rounded corners
	padding: "10px", // Padding inside the rectangle
	margin: "10px 0", // Margin between rectangles
	backgroundColor: "#f9f9f9", // Background color
	display: "flex", // Use flexbox to center the content
	justifyContent: "center", // Center content horizontally
	alignItems: "center", // Center content vertically
	fontSize: "16px", // Font size
};

export default App;
