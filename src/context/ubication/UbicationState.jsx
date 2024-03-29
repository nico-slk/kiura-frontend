import { useReducer } from 'react';
import { createUbication, getUbications, getubicationByName } from '../../services/UbicationService';
import constants from '../constants';
import UbicationContext from './UbicationContext';
import UbicationReducer from './UbicationReducer';

// eslint-disable-next-line react/prop-types
export const UbicationState = ({ children }) => {
  const initial_state = {
    ubications: [],
    ubication: {}
  };
  const { READ_UBICATION, CREATE_UBICATION, READ_UBICATIONS } = constants;

  const [state, dispatch] = useReducer(UbicationReducer, initial_state);

  const getUbicationsList = () => {
    getUbications().then(res =>
      dispatch({ type: READ_UBICATIONS, payload: res.usersList })
    );
  };

  const createNewUbication = (body) => {
    createUbication(body).then(res =>
      dispatch({ type: CREATE_UBICATION, payload: res.usersList })
    );
  };

  const getUbication = (city) => {
    getubicationByName(city).then(res =>
      dispatch({ type: READ_UBICATION, payload: res })
    );
  };

  return (
    <UbicationContext.Provider value={{
      ubicationState: state,
      getUbicationsList,
      createNewUbication,
      getUbication
    }} >
      {children}
    </UbicationContext.Provider>
  );
};
