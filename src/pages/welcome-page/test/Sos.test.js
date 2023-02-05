import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toppings from '../Toppings';

test('soslar eklenip çıkarılıyor', async () => {
  const user = userEvent.setup();
  render(<Toppings />);

  //fiyat sıfırdan başlar
  const cesitlerFiyat = screen.getByTestId('ucret');
  expect(cesitlerFiyat).toHaveTextContent('0');

  // bir tane m m ekle
  const sos1 = await screen.findByRole('checkbox', { name: 'Mochi' });
  await user.click(sos1);

  const sos2 = await screen.findByRole('checkbox', { name: 'Gummi bears' });
  await user.click(sos2);

  expect(cesitlerFiyat).toHaveTextContent('4'); //matchers

  await user.click(sos1);
  expect(cesitlerFiyat).toHaveTextContent('2');
});
