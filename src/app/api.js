import axios from "axios";

const API = axios.create({ baseURL: "https://arrc-backend.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//*profile
export const signIn = (formData) => API.post("/profiles/register", formData);

// addCode
export const addCode = (codeData) => API.post("/codes/add", codeData);
