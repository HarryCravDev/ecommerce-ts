import { Divider } from "@mui/material";
import Rating from "../rating/Rating";
import React from "react";
import IProduct from "../../types/IProduct";

const ProductDetails: React.FC<IProduct> = (product) => {
	return (
		<>
			<h1>{product.name}</h1>
			<Divider className="my-4" />
			<div className="flex items-center">
				<Rating
					rating={product.rating}
					text={`${product.numReviews} reviews`}
				/>
			</div>
			<Divider className="my-4" />
			<p>Price: £{product.price}</p>
			<Divider className="my-4" />
			<p>Description: {product.description}</p>
		</>
	);
};

export default ProductDetails;
