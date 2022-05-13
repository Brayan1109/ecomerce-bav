import axios from "axios";

const URL = "https://ecommerce-exercise-backend.herokuapp.com";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});

export const postlogin = async (data) => {
  const req = await axios.post(`${URL}/login/`, data);
  return req;
};

export const getProduct = async () => {
  const req = await axios.get(`${URL}/products/`, config());
  return req;
};

export const getCategory = async () => {
  const req = await axios.get(`${URL}/categories/`, config());
  return req;
};

export const getFilterProducts = async (id) => {
  const req = await axios.get(`${URL}/products/?category=${id}`, config());
  return req;
};

export const getProductById = async (id) => {
  const req = await axios.get(`${URL}/products/${id}/`, config());
  return req;
};

export const addProductCart = async (data) => {
  const req = await axios.post(`${URL}/products/add_to_cart/`, data, config());
  return req;
};

export const getProductCart = async () => {
  const req = await axios.get(`${URL}/cart/`, config());
  return req;
};

export const deleteProductCart = async (id) => {
  const req = await axios.delete(`${URL}/cart/${id}/remove_item/`, config());
  return req;
};

export const payProducts = async () => {
  const req = await axios.post(`${URL}/cart/buy/`, {}, config());
  return req;
};
