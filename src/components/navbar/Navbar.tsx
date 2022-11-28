import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" className="p-3 navbar-component">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						className="block md:hidden"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/" className="link">
							ProShop
						</Link>
					</Typography>
					<Link to="/cart" className="link">
						<Button color="inherit">
							<ShoppingCartIcon /> Cart
						</Button>
					</Link>
					<Link to="/login" className="link">
						<Button color="inherit">
							<LoginIcon /> Login
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
