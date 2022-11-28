import React from "react";
import IProduct from "../../types/IProduct";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";
import "./product.styles.css";

const Product: React.FC<IProduct> = (product) => {
	return (
		<Card style={{ height: "100%" }}>
			<CardMedia component="img" image={product.image} alt={product.name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					<Link to={`/product/${product.id}`} className="product-link">
						{product.name}
					</Link>
					{/* {product.name} */}
				</Typography>
				<Divider />
				<Typography
					variant="body2"
					color="text.secondary"
					className="pt-2 flex items-center"
				>
					<Rating
						rating={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Typography>

				<h2>£{product.price}</h2>
			</CardContent>
			{/* <CardActions>
				<Button color="primary" variant="contained" size="small">
					Share
				</Button>
				<Button size="small">Learn More</Button>
			</CardActions> */}
		</Card>
	);
};

export default Product;
