export const LOGIN_ACTION = "LOGIN_ACTION";
export const SET_USER = "SET_USER";
export const REGISTER_ACTION = "REGISTER_ACTION";
export const GET_USER = "GET_USER";

export const register = (payload) => ({
  type: REGISTER_ACTION,
  payload,
});

export const login = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const getUser = () => ({
  type: GET_USER,
});
