const initialState = {
  saving: false,
  loggingIn: false,
  firebaseError: null,
  token: null,
  userID: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };

    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.firebaseResultData.idToken,
        userID: action.firebaseResultData.localId,
      };

    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        loggingIn: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loggingIn: false,
        token: action.firebaseResultData.idToken,
        userID: action.firebaseResultData.localId,
      };

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loggingIn: false,
        firebaseError: action.error.response.data.error.message,
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        userID: null,
        firebaseError: null,
      };

    default:
      return state;
  }
};

export default reducer;
