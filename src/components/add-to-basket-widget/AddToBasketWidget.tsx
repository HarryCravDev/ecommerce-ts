import { Button, Divider } from "@mui/material";
import React from "react";
import IProduct from "../../types/IProduct";

const AddToBasketWidget: React.FC<IProduct> = (product) => {
	return (
		<div style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}>
			<div className="mt-3 pb-2 px-4">
				<div className="flex justify-between">
					<p>Price:</p> <p>£{product.price}</p>
				</div>
			</div>
			<Divider className="my-1" />
			<div className="py-2 px-4">
				<div className="flex justify-between">
					<p>Status: </p>
					<p>{product.countInStock > 0 ? "In stock" : "Out of stock"}</p>
				</div>
			</div>
			<Divider className="my-1" />
			<div className="py-2 px-4">
				<Button
					variant="contained"
					fullWidth={true}
					disabled={product.countInStock === 0}
				>
					Add to Basket
				</Button>
			</div>
		</div>
	);
};

export default AddToBasketWidget;
