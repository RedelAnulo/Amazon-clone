import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import Classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
function Cart() {
	const [{ basket, user }, dispatch] = useContext(DataContext);
	const total = basket.reduce((amount, item) => {
		return item.price * item.amount + amount;
	}, 0);

const increment = (item)=>{
	dispatch({
		type:Type.ADD_TO_BASKET,item
	})
}
const decrement = (id)=>{
	dispatch({
		type:Type.REMOVE_FROM_BASKET,id
	})
}


	return (
		<LayOut>
			<section className={Classes.container}>
				<div className={Classes.Cart__container}>
					<h2>Hello</h2>
					<h3>Your shopping basket</h3>
					<hr />
					{basket?.length == 0 ? (
						<p>Opps! No Items in your cart</p>
					) : (
						basket?.map((item, i) => {
							return (
								<section>
									<ProductCard
									key={i}
									product={item}
									renderDesc={true}
									renderAdd={false}
									flex={true}
								/>
								<div>
									<button onClick={()=>increment(item)}>+</button>
									<span>{item.amount}</span>
									<button onClick={()=>decrement(item.id)}>-</button>
								</div>
								</section>
								
							);
						})
					)}
				</div>

				{basket?.length !== 0 && (
					<div className={Classes.subtotal}>
						<div>
							<p>Subtotal ({basket?.length} items)</p>
							<CurrencyFormat amount={total} />
						</div>
						<span>
							<input type="checkbox" />
							<small>This order conatins a gift</small>
						</span>
						<Link to="/payments">Continue To checkout</Link>
					</div>
				)}
			</section>
		</LayOut>
	);
}

export default Cart;
