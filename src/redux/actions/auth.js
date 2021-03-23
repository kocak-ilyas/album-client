import * as actionTypes from "../constants/actionTypes";
import * as api from "../../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in user
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    // log in user
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
