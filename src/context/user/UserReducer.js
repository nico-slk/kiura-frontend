import constants from '../constants';

const { CREATE_USER, READ_USER, UPDATE_USER, DELETE_USER } = constants;

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        user: payload
      };

    case READ_USER:
      return {
        ...state,
        users: payload
      };

    case UPDATE_USER: {
      console.log(UPDATE_USER);
    }

      break;

    case DELETE_USER: {
      console.log(DELETE_USER);
    }

      break;

    default:
      return state;
  }
};
