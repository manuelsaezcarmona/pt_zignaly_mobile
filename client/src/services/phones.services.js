import axios from 'axios';

const url = 'http://localhost:3100';

export async function getPhones() {
  try {
    const response = await axios.get(`${url}/phones`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
