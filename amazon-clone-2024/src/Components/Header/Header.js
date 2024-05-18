import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";

function Header() {
	return (
		<>
			<section>
				<div className={classes.header__container}>
					{/* Logo Section*/}
					<div className={classes.logo__container}>
						<a href="#">
							<img
								src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
								alt="Amazon Logo"
							/>
						</a>
						<div className={classes.delivery}>
							{/* Delivery */}
							<span>
								{/* Icon */}
								<SlLocationPin />
							</span>
							<div>
								<p>Delivered to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>

					{/* Search Section*/}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search Product" />
						{/* Icon */}
						<BsSearch size={25} />
					</div>
					{/* other section */}
					<div className={classes.order__container}>
						<a href="#" className={classes.language}>
							<img 
								src="https://canadianaflag.ca/cdn/shop/files/USA.jpg?crop=center&height=1080&v=1713209885&width=1080"
							 	alt="Flag"
							/>
							<select>
								<option value="">EN</option>
							</select>
						</a>
						<a href="#">
							<p>Sign In</p>
							<span>Accounts & Lists</span>
						</a>
						<a>
							<p>returns</p>
							<span> & Orders</span>
						</a>
						<a href="" className={classes.cart}>
							{/* icon */}
							<BiCart size={35} />
							<span>0</span>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
