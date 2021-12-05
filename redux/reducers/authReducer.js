export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGUT";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    case USER_LOGOUT:
      return action.payload;

    default:
      return state;
  }
};
export default userReducer;
