import constants from '../constants';

const { LOGIN_USER } = constants;

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        users: payload
      };

    default:
      return state;
  }
};
