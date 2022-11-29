import { Button, Card, CardMedia, Divider, Grid } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import AddToBasketWidget from "../components/add-to-basket-widget/AddToBasketWidget";
import ProductDetails from "../components/product-details/ProductDetails";
import Rating from "../components/rating/Rating";
import { products } from "../data/products";
import IProduct from "../types/IProduct";

const ProductScreen = () => {
	const { id } = useParams();

	const product = products.find((p: IProduct) => p.id === parseInt(id!));

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<section className="px-5 md:px-32">
			<Button variant="contained" color="primary" className="my-3">
				<Link to="/" className="link">
					Go Back
				</Link>
			</Button>
			<Grid container spacing={2}>
				<Grid item xs={4} md={5}>
					<Card>
						<CardMedia
							component="img"
							height="600"
							image={product.image}
							alt={product.name}
						/>
					</Card>
				</Grid>
				<Grid item xs={4} md={4}>
					<ProductDetails {...product} />
				</Grid>
				<Grid item xs={3} md={3}>
					<AddToBasketWidget {...product} />
				</Grid>
			</Grid>
		</section>
	);
};

export default ProductScreen;
