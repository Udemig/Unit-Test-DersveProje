import Scoops from './../Scoops';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/*   
! Seçiciler
? Komut [All] By Seçici
! get // elementler DOMda var ise kullanıllır
! find // element ne zaman gelceği belli değilse //async
! query //element DOM da yok ise

TODO npm install axios@^0.27
*/

test('API den gelen her çeşit verisi için ekrana resim basar', async () => {
  //callback: içinde başka fonksiyon çalıştıran
  render(<Scoops />);

  //Çeşitlerde resimlerini bul
  const resimler = await screen.findAllByRole('img', { name: /cesit/i });
  expect(resimler).toHaveLength(4);
});

test('Çeşit ekleme işlemi', async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  //Sepet 0 tlde baişlar
  const cesitlerFiyat = screen.getByTestId('ucret');
  expect(cesitlerFiyat).toHaveTextContent('0');

  //sepete çikltalı ekler
  const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole(
    'button',
    { name: 'Ekle' }
  );
  await user.click(choBtn);

  //sepetin durumu
  expect(cesitlerFiyat).toHaveTextContent('3');
});
