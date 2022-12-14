import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('When a Key is pressed the display updates automatically', async () => {
  render(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>,
  );

  const calcKey = screen.getByTestId('1');
  const display = screen.findByTestId('display');
  fireEvent.click(calcKey);

  expect((await display).textContent).toBe('1');
});

test('When button is clicked the display updates automatically', async () => {
  render(
    <MemoryRouter>
      <Calculator />
    </MemoryRouter>,
  );

  const calcKey = screen.getByRole('button', { name: /2/ });
  const display = screen.findByTestId('display');
  fireEvent.click(calcKey);

  expect((await display).textContent).toBe('2');
  // expect(screen.getByRole("alert"));
});
