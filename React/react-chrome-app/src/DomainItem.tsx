import { formatTimeMinutes, formatTime } from "./utils";
import ProgressBar from "react-bootstrap/ProgressBar";

function DomainItem({
	domain,
	totalTime,
	maxTime,
	isCurrent,
	icon,
}: {
	domain: string;
	totalTime: number;
	maxTime: number;
	isCurrent: boolean;
	icon: string;
}) {
	const progressBarContainerStyle = {
		height: "1rem", // 1rem progress bar height
		backgroundColor: "#e9ecef", // Bootstrap secondary background color
		borderRadius: "0.375rem", // Bootstrap border radius
		overflow: "hidden", // Prevent overflow beyond the container
		boxShadow: "inset 0 0.5rem 1rem rgba(0, 0, 0, 0.15)", // Bootstrap inset shadow
		width: "80%", // Full width container
	} as React.CSSProperties;

	const progressBarStyle = {
		width: `${(totalTime / maxTime) * 100}%`, // Dynamic width based on progress percentage
		height: "100%",
		backgroundColor: "#69A2B0", // Bootstrap primary background color
		color: "#fff", // White text color
		textAlign: "center", // Center text in the bar
		lineHeight: "1rem", // Line height matching the height for centered text
		backgroundSize: "1rem 1rem", // Bootstrap size for the stripes
		animation: "progress-bar 1s linear infinite", // Striped animation
		transition: "width 0.6s ease", // Smooth transition of the progress bar width
	} as React.CSSProperties;

	const animatedProgressBarContainerStyle = {
		height: "1rem",
		backgroundColor: "#e9ecef", // Bootstrap secondary background color
		borderRadius: "0.375rem", // Bootstrap border radius
		overflow: "hidden", // Prevent overflow beyond the container
		boxShadow: "inset 0 0.5rem 1rem rgba(0, 0, 0, 0.15)", // Bootstrap inset shadow
		width: "80%",
	} as React.CSSProperties;

	const animatedProgressBarStyle = {
		width: `${(totalTime / maxTime) * 100}%`, // Dynamic width based on progress percentage
		height: "100%",
		backgroundColor: "#A1C084", // Bootstrap primary color
		color: "#fff", // Text color for the percentage inside the progress bar
		textAlign: "center", // Align text in the center
		lineHeight: "1rem", // Align text vertically
		backgroundImage:
			"linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)", // Bootstrap progress stripes
		backgroundSize: "1rem 1rem", // Size of the stripes
		animation: "progress-bar-stripes progress-bar-animated 1s linear infinite", // Bootstrap stripe animation
		transition: "width 0.6s ease", // Smooth transition for width change
	} as React.CSSProperties;

	if (domain === "extensions") {
		icon = "https://www.google.com/favicon.ico";
	}

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "5px",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center", // Center the text and icon vertically
					}}
				>
					<img
						src={icon}
						alt="icon"
						style={{
							width: "20px",
							height: "20px",
							marginRight: "5px",
						}}
					/>
					<div>{domain}</div>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "10px",
					marginBottom: "10px",
					paddingRight: "10px",
				}}
			>
				{isCurrent && (
					<div style={animatedProgressBarContainerStyle}>
						<div style={animatedProgressBarStyle}></div>
					</div>
				)}
				{!isCurrent && (
					<div style={progressBarContainerStyle}>
						<div style={progressBarStyle}></div>
					</div>
				)}
				<span>{formatTime(totalTime)}</span>
			</div>
		</div>
	);
}

export default DomainItem;
