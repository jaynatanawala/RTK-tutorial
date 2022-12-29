import axios from "axios";
import { LOGIN, SIGN_UP } from "./constant";

/*********** Tutorials ***********/
export const addTutorial = async (data) => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/`, data);
};

export const getTutorial = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}`);
};

export const updateTutorial = async (id, data) => {
  return await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, data);
};

export const deleteTutorial = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
};

export const searchTutorial = async (text) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/${text}`);
};

/************** User ****************/
export const signUp = async (data) => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/${SIGN_UP}`, data);
};

export const login = async (data) => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/${LOGIN}`, data);
};
