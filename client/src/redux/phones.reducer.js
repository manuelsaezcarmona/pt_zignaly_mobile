import { actionTypes } from './phones.actiontypes';

const initialPhones = [];

export function phonesReducer(phones = initialPhones, action) {
  switch (action.type) {
    case actionTypes.LOAD_PHONES:
      return action.payload;

    default:
      return phones;
  }
}
