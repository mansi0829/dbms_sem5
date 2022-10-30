import { LOGIN, LOGOUT} from "./actions";

const initialState = {
  token: localStorage.getItem("userinfo"),
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
        token:payload.data.data.token
      };
    }
    case LOGOUT: {
      localStorage.removeItem("userinfo");
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
