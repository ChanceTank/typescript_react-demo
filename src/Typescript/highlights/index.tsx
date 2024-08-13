import React, { useState } from "react";

type ComponentProps = { children: React.ReactNode };

function OnHoverHighlight({ children }: ComponentProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<span
			style={{
				color: isHovered ? "red" : "black",
			}}
			onMouseEnter={() => {setIsHovered(true)}}
			onMouseLeave={() => {setIsHovered(false)}}>
			{children}
		</span>
	);
}

export default OnHoverHighlight;
