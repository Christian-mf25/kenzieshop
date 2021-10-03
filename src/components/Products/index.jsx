import { useSelector } from "react-redux"
import CardProducts from "../CardProducts"

const Products = () => {

	const products = useSelector(store => store.products)

	return (
		<section>
			<ul>
				{
					products.map((item, index) => (
						<CardProducts key={index} product={item} />
					))
				}
			</ul>
		</section>
	)
}

export default Products