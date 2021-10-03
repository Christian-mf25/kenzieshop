import { addCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import "./style.css"

const CardProducts = ({ product, remove = false }) => {

	const dispatch = useDispatch()

	const { id, name, image, type, price, chave } = product


	return (
		<li
			className="product_list">

			<h3
				className="product_name">
				{chave}
			</h3>

			<img
				className="product_image"
				src={image}
				alt={name}
			/>

			<p
				className="product_price">
				{`R$ ${price.toString().replace(".", ",")}`}
			</p>
			{
				remove ? (
					<Button
						variant="outlined"
						color="inherit"
						onClick={() => dispatch(removeFromCartThunk(id))} >
						Remover item
					</Button>
				) : (
					<Button
						color="inherit"
						variant="outlined"
						onClick={() => dispatch(addCartThunk(product))}>
						Adicionar ao carrinho
					</Button>
				)
			}

		</li>
	)
}

export default CardProducts