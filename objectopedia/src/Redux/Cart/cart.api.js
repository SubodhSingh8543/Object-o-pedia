import axios from "axios";

export const getCartApi = async () => {
	try {
		let res = await axios.get(`https://blushing-duck-tie.cyclic.app/users`);
		let data = await res.data;
		return data;
	} catch (e) {
		console.log(e);
	}
}

