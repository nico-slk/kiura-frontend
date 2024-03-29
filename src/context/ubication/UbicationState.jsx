import { useReducer } from 'react';
import { getUbications } from '../../services/UbicationService';
import constants from '../constants';
import UbicationContext from './UbicationContext';
import UbicationReducer from './UbicationReducer';

// eslint-disable-next-line react/prop-types
export const UbicationState = ({ children }) => {
  const initial_state = {
    ubications: [],
    ubication: {}
  };
  const { READ_USER } = constants;

  const [state, dispatch] = useReducer(UbicationReducer, initial_state);

  const getUbicationsList = () => {
    getUbications().then(res => {
      dispatch({ type: READ_USER, payload: res.usersList });
    });
  };

  return (
    <UbicationContext.Provider value={{
      state,
      getUbicationsList
    }} >
      {children}
    </UbicationContext.Provider>
  );
};
