import { addCart, removeFromCart } from "./actions"

export const addCartThunk = (product) => {

	return (dispatch) => {

		const list = JSON.parse(localStorage.getItem("cart")) || []
		list.push(product)
		console.log(list)
		localStorage.setItem("cart", JSON.stringify(list))
		dispatch(addCart(product))
	}
}

export const removeFromCartThunk = (id) => (dispatch, getStore) => {

	const { cart } = getStore()

	const list = cart
	const indexToRemove = list.findIndex(item => item.id === id)
	const removeItem = list.splice(indexToRemove, 1)

	localStorage.setItem("cart", JSON.stringify(list))
	dispatch(removeFromCart(list))
}