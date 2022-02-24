import { render, screen } from '../../test.utils';
import { initialState } from '../../loadstate.utils';
import { PhoneListContainer } from './PhoneListContainer';

jest.mock('../../redux/phones.actioncreators', () => ({
  ...jest.requireActual('../../redux/phones.actioncreators'),
  loadAllPhones: jest.fn()
}));

describe('Given the PhoneListContainer', () => {
  beforeEach(() => {
    render(<PhoneListContainer />, initialState);
  });

  test('Render the Spinner component', () => {
    const element = screen.getByTestId('phone-spinner');
    expect(element).toBeInTheDocument();
  });
});
