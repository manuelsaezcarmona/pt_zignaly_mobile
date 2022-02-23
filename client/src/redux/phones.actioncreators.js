import { actionTypes } from './phones.actiontypes';
import { getPhones } from '../services/phones.services';

export function loadAllPhones() {
  return async (dispatch) => {
    try {
      const phones = await getPhones();
      dispatch({
        type: actionTypes.LOAD_PHONES,
        payload: phones
      });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_LOAD_PHONES, error });
    }
  };
}
