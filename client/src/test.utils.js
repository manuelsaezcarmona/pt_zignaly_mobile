/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';

function render(component, initialState) {
  const store = configureStore(initialState);

  const Wrapper = function({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  };
  return rtlRender(component, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
