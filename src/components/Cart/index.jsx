import { useSelector } from "react-redux"
import CardProducts from "../CardProducts"

const Cart = () => {

	const cart = useSelector(store => store.cart)
	const cartTotal = cart.reduce((acc, item) => {
		return (acc + item.price)
	}, 0)

	return (
		<ul>
			<h3>Carrinho</h3>
			<p>{cartTotal.toFixed(2).toString().replace(".", ",")}</p>
			{
				cart.map((itemMap, index) =>

					< CardProducts
						key={index}
						idCart={index}
						product={itemMap}
						cartTotal={cartTotal}
						remove
					/>

				)
			}
		</ul>
	)
}

export default Cart