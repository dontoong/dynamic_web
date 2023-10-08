// redux/actions.js
export const setMemberNick = (nick) => ({
    type: 'SET_MEMBER_NICK',
    payload: nick,
  });
  
  // redux/reducers.js
  const initialState = {
    member_nick: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MEMBER_NICK':
        return {
          ...state,
          member_nick: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  