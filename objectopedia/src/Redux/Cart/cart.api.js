import axios from "axios";

export const getCartApi = async () => {
	try {
		let res = await axios.get(`https://dataobj.onrender.com/users/81bkuZFjGxdzlrsPm6r2Q4Za5xB3`);
		let data = await res.data.cart;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const deleteCartApi = async (newCart) => {
	try {
		let res = await axios.patch(`https://dataobj.onrender.com/users/81bkuZFjGxdzlrsPm6r2Q4Za5xB3`, {
			cart: newCart
		});
		let data = await res.data.cart;
		return data;
	} catch (e) {
		console.log(e);
	}
}

export const updateCartApi = async (newCart) => {
	try {
		let res = await axios.patch(`https://dataobj.onrender.com/users/81bkuZFjGxdzlrsPm6r2Q4Za5xB3`, {
			cart: newCart
		});
		let data = await res.data.cart;
		return data;
	} catch (e) {
		console.log(e);
	}
}

