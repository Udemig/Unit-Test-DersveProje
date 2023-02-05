import React from 'react';
import Scoops from './Scoops';
import OrderForm from './../form/OrderForm';
import Toppings from './Toppings';

const WelcomePage = () => {
  return (
    <div>
      {/* ÇEŞİTLER */}
      <Scoops />
      {/*  SOSLAR */}
      <Toppings />
      {/* FORM */}
      <OrderForm />
    </div>
  );
};

export default WelcomePage;
