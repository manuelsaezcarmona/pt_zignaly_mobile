import axios from 'axios';
import { loadAllPhones } from './phones.actioncreators';
import { actionTypes } from './phones.actiontypes';

jest.mock('axios');

describe('Given the phone.action creator', () => {
  const response = {
    data: [{ _id: '6215359a9a41acdb7b500be3' }]
  };
  const dispatch = jest.fn();
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('When the promise is resolve, Should dispatch the response', async () => {
    axios.get.mockResolvedValue(Promise.resolve(response));
    await loadAllPhones()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PHONES,
      payload: response.data
    });
  });
});
