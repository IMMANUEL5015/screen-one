import axios from "axios";
import envKeys from "../config";

const { BASE_URL } = envKeys;

export const service = axios.create({
  baseURL: BASE_URL,
});

// Function logic to get user token
const token = () => {};

// Function to Logout user without authentication
const logout = () => {};

service.interceptors.request.use(
  (config) => ({
    ...config,
    headers: { Authorization: "Bearer " + token() },
  }),
  (error) => Promise.reject(error)
);

const responseStatus = [401];

service.interceptors.response.use(
  (response) => response,
  (error) => {
    responseStatus.includes(error.response.status) && logout();
    return Promise.reject(error);
  }
);

const requestMethods = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete",
};

export const serviceApiMiddleware = ({ method, url, data }) => {
  switch (method) {
    case requestMethods.GET:
      return service[method](url);
    case requestMethods.POST:
      return service[method](url, data);
    case requestMethods.PATCH:
      return service[method](url, data);
    case requestMethods.DELETE:
      return service[method](url);
    default:
      return service.get(url);
  }
};
