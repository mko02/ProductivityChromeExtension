import React, { useEffect, useState } from "react";
import { getAllCategories } from "./utils";

interface Category {
	Domain: string;
	Category: string;
}

function Redirect() {
	const [data, setData] = useState<Category[]>([]);

	useEffect(() => {
		setData(getAllCategories());
	}, []);
	return (
		<div>
			<h1>Redirect</h1>
			<p>Redirecting...</p>
			{/* Display the data */}
			{data.map((item) => (
				<div key={item.Domain}>
					<p>
						{item.Domain} - {item.Category}
					</p>
				</div>
			))}
		</div>
	);
}

export default Redirect;
