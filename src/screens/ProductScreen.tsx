import {
	Button,
	Card,
	CardMedia,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
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
				</Grid>
				<Grid item xs={3} md={3}>
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
				</Grid>
			</Grid>
		</section>
	);
};

export default ProductScreen;
