import React from "react";
import RatingMaterial from "@mui/material/Rating";

const Rating: React.FC<{ rating: number; text: string }> = ({
	rating,
	text,
}) => {
	return (
		<>
			<RatingMaterial
				name="simple-controlled"
				value={rating}
				disabled={true}
				className="opacity-100"
			/>
			<span className="ml-2">{text}</span>
		</>
	);
};

export default Rating;
