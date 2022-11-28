import React from "react";
import Grid from "@mui/material/Grid";
import { products } from "../data/products";
import IProduct from "../types/IProduct";
import Product from "../components/product/Product";
import { Typography } from "@mui/material";

const HomeScreen = () => {
	return (
		<section className="px-5">
			<Typography variant="h3" className="text-center my-5">
				Latest Products
			</Typography>
			<Grid container gap={2} className="justify-center">
				{products.map((product: IProduct) => (
					<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
						<Product {...product} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default HomeScreen;
