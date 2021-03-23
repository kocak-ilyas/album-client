import * as actionTypes from "../constants/actionTypes";
import * as api from "../../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: actionTypes.AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: actionTypes.AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
