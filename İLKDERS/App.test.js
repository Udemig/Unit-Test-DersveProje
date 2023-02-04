import {
  fireEvent,
  getByRole,
  logRoles,
  render,
  screen,
} from '@testing-library/react';
import App from '../src/App';

//TEST DRIVEN DEVELOPMENT (TDD)  RED-GREEN
//Bheaviour Driven ()

test('buton doğru renge sahip', () => {
  render(<App />);

  // elementi seçtik
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' });

  //butona ekrana basılıdığında kırmızı olsun
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

  //butona tıklama
  fireEvent.click(colorBtn);

  //tkladınktan sonra mavi olur
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  //içindeki yazı kırmızıya dönüştü olsun
  expect(colorBtn).toHaveTextContent('Change to red');
});

test('tiklendiğinde butonun değişimi', () => {
  render(<App />);

  //buton aktif mi
  const colorBtn = screen.getByRole('button', { name: /change to blue/i });
  expect(colorBtn).toBeEnabled();

  // CHECKBOXI TİKLESİN
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: 'gray' });

  // tekara tıklayıp akti et
  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });
});
