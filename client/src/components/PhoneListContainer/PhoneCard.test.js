import { render, screen } from '../../test.utils';
import { initialState } from '../../loadstate.utils';
import { PhoneCard } from './PhoneCard';

describe('Given the PhoneCard Component', () => {
  const item = {
    _id: '6215359a9a41acdb7b500be3',
    title: 'Xiaomi Redmi Note 11 - Smartphone 4+64GB',
    brand: 'Xiaomi',
    color: 'grey',
    price: '179,99',
    imageURL: 'https://i.ibb.co/5hdMnQS/xiaomi-Redmi-Note.jpg'
  };
  beforeEach(() => {
    render(<PhoneCard item={item} />, initialState);
  });

  test('Render image Card', () => {
    const title = screen.getByTestId('6215359a9a41acdb7b500be3');
    expect(title).toBeTruthy();
    expect(title).toBeInTheDocument();
  });
});
