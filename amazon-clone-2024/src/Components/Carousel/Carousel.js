import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from "./Carousel.module.css";

function CarouselEffect() {
	return (
		<div>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				shoIndicators={false}
				showThumbs={false}
			>
				{img.map((imageItemLink) => {
					return <img key={imageItemLink} src={imageItemLink} alt="Links" />;
				})}
			</Carousel>
			<div className={classes.hero__img}></div>
		</div>
	);
}

export default CarouselEffect;
