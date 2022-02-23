import axios from 'axios';
import { getPhones } from './phones.services';

describe('Given the phones services', () => {
  test('When the API works should return data', async () => {
    jest.mock('axios');
    axios.get = jest.fn().mockResolvedValue({
      data: [
        { id: 1, title: 'Xiaomi' },
        { id: 2, title: 'Iphone' }
      ]
    });

    const phonesdata = [
      { id: 1, title: 'Xiaomi' },
      { id: 2, title: 'Iphone' }
    ];
    const result = await getPhones();
    expect(result).toEqual(phonesdata);
  });
});
