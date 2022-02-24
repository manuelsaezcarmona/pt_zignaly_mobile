import { render, screen } from '../../test.utils';
import { initialState } from '../../loadstate.utils';
import { PhoneDetailComponent } from './PhoneDetailComponent';

describe('Given the PhoneDetail Component', () => {
  beforeEach(() => {
    render(<PhoneDetailComponent />, initialState);
  });
  test('Should be Rendered', () => {
    const color = screen.getByText(/grey/i);
    expect(color).toBeTruthy();
    expect(color).toBeInTheDocument();
  });
});
