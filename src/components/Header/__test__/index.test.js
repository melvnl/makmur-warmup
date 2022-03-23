/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../index';

const data = {
  total: 53,
};

test('Header should render total of Book', () => {
  const { container } = render(<Header bookTotal={data.total} />);

  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector('span')).toBeInTheDocument();
});

test('Header should notrender total of Book if bookTotal is not define', () => {
  const { container } = render(<Header />);

  // eslint-disable-next-line testing-library/no-container
  expect(container.querySelector('span')).toBeFalsy();
});
