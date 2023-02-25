import axios from "axios";

export const getAddressApi = async (id) => {
	try {
		let res = await axios.get(`https://dataobj.onrender.com/users/${id}`);
		let data = await res.data.address;
		return data;
	} catch (e) {
		console.log(e);
	}
}


export const addAddressApi = async (newAddress, id) => {
	try {
		let res = await axios.post(`https://dataobj.onrender.com/users/${id}`, newAddress);
		let data = await res.data.address;
		return data;
	} catch (e) {
		console.log(e);
	}
}


export const updateAddressApi = async (newAddress, id) => {
	try {
		let res = await axios.patch(`https://dataobj.onrender.com/users/${id}`, {
			address: newAddress
		});
		let data = await res.data.address;
		return data;
	} catch (e) {
		console.log(e);
	}
}
