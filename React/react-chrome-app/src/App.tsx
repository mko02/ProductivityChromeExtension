import React, { useEffect } from "react";
import { useState } from "react";
import { getCurrentDomain } from "./utils";
import DomainItem from "./DomainItem";
import { time } from "console";

function App() {
	const [keys, setKeys] = useState<string[]>([]);
	const [domainStorage, setDomainStorage] = useState<{ [key: string]: any }>(
		{}
	);
	const [activeTimeStorage, setActiveTimeStorage] = useState<{
		[key: string]: any;
	}>({});
	const [iconStorage, setIconStorage] = useState<{ [key: string]: any }>({});
	const [currentActiveDomain, setCurrentActiveDomain] = useState<string | null>(
		null
	);
	const [currentActiveDomainTime, setCurrentActiveDomainTime] =
		useState<number>(0);
	const [currentActiveDomainIcon, setCurrentActiveDomainIcon] = useState<
		string | null
	>(null);
	const [startTimer, setStartTimer] = useState<boolean>(false);
	const [maxTime, setMaxTime] = useState<number>(0);

	useEffect(() => {
		getCurrentDomain((url) => {
			setCurrentActiveDomain(url);
		});
	}, []);

	useEffect(() => {
		chrome.storage.local.get(null, (data) => {
			var dataKeys = Object.keys(data);
			console.log(dataKeys);

			// filter out keys that are not domain names
			dataKeys = dataKeys.filter((key) => {
				const item = JSON.parse(data[key]);
				return item?.type === "domain";
			});

			setDomainStorage(data);
			setKeys(dataKeys);
			var tempMaxTime = 0;

			dataKeys.forEach((key) => {
				const item = JSON.parse(data[key]);
				const totalActiveTime = item?.totalDomainTime;
				const icons = item?.icon;
				const roundedTotalActiveTime = Math.round(totalActiveTime);

				if (key === currentActiveDomain) {
					setCurrentActiveDomainTime(roundedTotalActiveTime);
					setCurrentActiveDomainIcon(icons);
				}
				if (roundedTotalActiveTime) {
					// save active time rounded to ones
					setActiveTimeStorage((prevState) => ({
						...prevState,
						[key]: roundedTotalActiveTime,
					}));
				}
				if (icons) {
					setIconStorage((prevState) => ({
						...prevState,
						[key]: icons,
					}));
				}
				tempMaxTime = Math.max(tempMaxTime, roundedTotalActiveTime);
			});
			setMaxTime(tempMaxTime);
			setStartTimer(true);
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
		const data = keys
			.map((key) => {
				if (key === currentActiveDomain || key === "undefined") return null;
				return {
					name: key,
					time: activeTimeStorage[key] || 0, // set as int
					icon: iconStorage[key] || "",
				};
			})
			.filter(
				(item): item is { name: string; time: number; icon: string } =>
					item !== null && item.time > 60
			)
			.sort((a, b) => b.time - a.time);

		return (
			<div>
				<DomainItem
					domain={currentActiveDomain || ""}
					totalTime={currentActiveDomainTime}
					maxTime={maxTime}
					isCurrent={true}
					icon={currentActiveDomainIcon || ""}
				/>
				{/* display only top 5 */}
				{data.slice(0, 5).map((item) => (
					<DomainItem
						domain={item.name}
						totalTime={item.time}
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
							{ url: chrome.runtime.getURL("js/redirect.html") } // This opens NewFile.html in a new tab
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
