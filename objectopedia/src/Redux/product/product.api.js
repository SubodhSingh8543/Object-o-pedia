
import axios from "axios";

export const getProductsApi = async () => {
  try {
    let response = await axios.get(
      `https://outrageous-smock-fish.cyclic.app/products`,
      
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};