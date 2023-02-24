
import axios from "axios";

export const getProductsApi = async (params) => {
  
  try {
    let response = await axios.get(
      `https://dataobj.onrender.com/products`,
      params
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};