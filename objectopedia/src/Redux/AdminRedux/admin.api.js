import axios from "axios"

export const getAdminProductAPI = async (payload) => {
    const res = await axios.get(`https://dataobj.onrender.com/products`,payload);
    // console.log(res)
    return { data :res.data,totalPages: Number(res.headers['x-total-count'])/ Number(payload.params._limit)} ;
}

export const postAdminProductAPI = async (payload) => {
    const res = await axios.post(`https://dataobj.onrender.com/products`,payload);
    return res.data;
}

export const updateAdminProductAPI = async (id,payload) => {
    const res = await axios.patch(`https://dataobj.onrender.com/products/${id}`,payload);
    return res.data;
}

export const deleteAdminProductAPI = async (id) => {
    const res = await axios.delete(`https://dataobj.onrender.com/products/${id}`);
    return res.data;
}

export const getAdminUserDataAPI = async () => {
    const res = await axios.get(`https://dataobj.onrender.com/users`);
    return res.data;
}

export const deleteAdminUserDataAPI = async (id) => {
    let res = await axios.delete(`https://dataobj.onrender.com/users/${id}`);
    return res.data;
}

export const ordersAdminUserDataAPI = async () => {
    let res = await axios.get(`https://dataobj.onrender.com/users`);
    return res.data;
}

