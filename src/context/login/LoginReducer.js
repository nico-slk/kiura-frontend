import constants from '../constants';

const { LOGIN_USER, REGISTER_USER } = constants;

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER: {
      console.log('LOGIN_USER');
    }

      return;
    case REGISTER_USER: {
      console.log('REGISTER_USER');
    }

      return;

    default:
      return state;
  }
};
