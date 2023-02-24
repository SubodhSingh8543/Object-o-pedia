import { async } from "@firebase/util";
import axios from "axios"



export const getUserDataAPI = async () => {
    let res = await axios.get(`https://dataobj.onrender.com/users`)
    return res.data;
}

export const getSingleUserDataAPI = async (id) => {
    let res = await axios.get(`https://dataobj.onrender.com/users/${id}`);
    return res.data;
}

export const postSingleUserDataAPI = async (payload) => {
    let res = await axios.post(`https://dataobj.onrender.com/users`,payload);
    return res.data;
}