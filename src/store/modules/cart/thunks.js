import { addCart, removeFromCart } from "./actions"

export const addCartThunk = (product) => {

	return (dispatch) => {
		
		const list = JSON.parse(localStorage.getItem("cart")) || []

		list.push(product)
		localStorage.setItem("cart", JSON.stringify(list))
		dispatch(addCart(product))
	}
}

export const removeFromCartThunk = (id) => (dispatch, getStore) => {

	const { cart } = getStore()
	const list = cart.filter(item => item.id !== id)
	
	localStorage.setItem("cart", JSON.stringify(list))
	dispatch(removeFromCart(list))
}