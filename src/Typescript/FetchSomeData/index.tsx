import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";
import { type Tour, tourSchema } from "./schema";
import OnHoverHighlight from "../highlights/index.tsx";

/**
 * Fetches data from a server to display in the UI.
 * @returns {JSX.Element} The component that fetches and displays the data.
 */
function Component() {
	// setup state values
	const [tours, setTours] = useState<Tour[]>([]);
	const [isLoading, setDataLoading] = useState(false);
	const [isError, setIsError] = useState<string | null>(null);

	// fetch data
	useEffect(() => {
		const getData = async () => {
			setDataLoading(true);
			try {
				const response = await fetch(url); //get data from the server
				if (!response.ok) {
					//check for 404
					throw new Error(`Failed to fetch tours...`);
				}
				const rawData: Tour[] = await response.json();
				const result = tourSchema.array().safeParse(rawData); //check data matches schema

				if (!result.success) {
					console.log(result.error.message);
					throw new Error(`Failed to parse tours`);
				}
				setTours(result.data); //sava data to the state
			} catch (error) {
				const message =
					error instanceof Error ? error.message : "there was an error...";
				setIsError(message);
			} finally {
				setDataLoading(false); //everything is done
			}
		};
		getData(); //run the callback function
	}, []);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}
	if (isError) {
		return <h3>Error {isError}</h3>;
	}

	return (
		<div>
			<h2 className="mb-1">Tours</h2>
			{tours.map((tour) => {
				return (
				<OnHoverHighlight>
					<p key={tour.id} className="mb-1" >
						{tour.name}
					</p>
				</OnHoverHighlight>
				);
			})}
		</div>
	);
}
export default Component;
