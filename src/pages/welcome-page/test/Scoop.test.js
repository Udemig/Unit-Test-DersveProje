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

  //bütün butonları seştik
  const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole(
    'button',
    { name: 'Ekle' }
  );

  //sepete çikltalı ekler
  await user.click(choBtn);

  //sepetin durumu
  expect(cesitlerFiyat).toHaveTextContent('3');
});

test('sıfırlama işlemi', async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  //butonları seçtik
  const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole(
    'button',
    { name: 'Ekle' }
  );

  await user.dblClick(caramelBtn);

  //toplam ücret
  const ucret = screen.getByTestId('ucret');
  expect(ucret).toHaveTextContent('6');

  //sıfırlama butonları
  const [delMint, delVanilla, delCho, delCaramel] = await screen.findAllByRole(
    'button',
    { name: /sıfırla/i }
  );
  await user.click(delCaramel);
  expect(ucret).toHaveTextContent('0');
});
