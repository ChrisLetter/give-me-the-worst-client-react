const initialState = {
  isAuthenticated: false,
  token: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default userReducer;
