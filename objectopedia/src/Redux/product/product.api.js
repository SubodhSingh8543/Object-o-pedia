
import axios from "axios";

export const getProductsApi = async () => {
  try {
    let response = await axios.get(
      `https://dailyobjectsdatabase.onrender.com/products`,
      
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};