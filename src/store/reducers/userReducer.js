const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload.user,
          token: action.payload.token,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default userReducer;
  