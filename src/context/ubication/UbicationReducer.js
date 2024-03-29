import constants from '../constants';

const {
  CREATE_UBICATION,
  READ_UBICATION,
  UPDATE_UBICATION,
  DELETE_UBICATION
} = constants;

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_UBICATION:
      return {
        ...state,
        user: payload
      };

    case READ_UBICATION:
      return {
        ...state,
        users: payload
      };

    case UPDATE_UBICATION: {
      console.log(UPDATE_UBICATION);
    }

      break;

    case DELETE_UBICATION: {
      console.log(DELETE_UBICATION);
    }

      break;

    default:
      return state;
  }
};
