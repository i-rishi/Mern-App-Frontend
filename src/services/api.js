// we will use axios to call the api on the click event of button
import axios from "axios";

const URL = "https://mern-app-backend-s58t.onrender.com";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/users`);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.patch(`${URL}/${id}`, user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
