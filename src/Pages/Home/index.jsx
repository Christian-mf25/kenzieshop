import Cart from "../../components/Cart"
import Products from "../../components/Products"
import "./style.css"

const Home = () => {

	return (
		<section className="home">
			<div className="all_products">
				<Products />
			</div>

			<div className="cart_products">
				<Cart />
			</div>
		</section>
	)
}

export default Home