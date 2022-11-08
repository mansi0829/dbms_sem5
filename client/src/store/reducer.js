import { LOGIN, LOGOUT} from "./actions";

const initialState = {
  token: localStorage.getItem("dbms_token"),
  isAuthenticated: false,
  userData: {},
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return {
        ...state,
        userData: payload.data.data,
        isAuthenticated: true,
        token:payload.data.data.token
      };
    }
    case LOGOUT: {
      localStorage.removeItem("dbms_token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        userData: null,
      };
    }
    default:
      return state;
  }
}
