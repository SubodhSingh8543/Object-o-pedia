import { async } from "@firebase/util"
import axios from "axios"



export const getSingleProductAPI = async (id) => {
    // console.log(id)
    let res = await axios.get(`https://dataobj.onrender.com/products/${Number(id)}`);
    // console.log(res.data)
    return res.data;
}

export const AddItemToTheCart = async (payload) => {
   let res = await axios.get(`https://dataobj.onrender.com/users/${payload}`);

   console.log(res.data);
   return res.data;
}

