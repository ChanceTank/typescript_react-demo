/**
 * Component for highlighting its children when hovered.
 *
 * @component
 * @example
 * ```tsx
 * import React from "react";
 * import OnHoverHighlight from "./OnHoverHighlight";
 *
 * function App() {
 *   return (
 *     <div>
 *       <OnHoverHighlight>
 *         <h1>Hello, World!</h1>
 *       </OnHoverHighlight>
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */
import React, { useState } from "react";

type ComponentProps = { children: React.ReactNode };


function OnHoverHighlight({ children }: ComponentProps) {
	const [isHovered, setIsHovered] = useState(false); //state for hover

	return (
		<span
			style={{
				color: isHovered ? "red" : "black",
			}}
			onMouseEnter={() => {setIsHovered(true)}}//event handler for mouse enter
			onMouseLeave={() => {setIsHovered(false)}}>//event handler for mouse leave
			{children}
		</span>
	);
}

export default OnHoverHighlight;
