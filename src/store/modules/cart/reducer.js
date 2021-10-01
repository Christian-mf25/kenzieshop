import { ADD_CART, REMOVE_CART } from "./actionsType"


const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_CART:

			return [...state, action.product]

		case REMOVE_CART:

			return action.list

		default:

			return state
	}
}

export default cartReducer