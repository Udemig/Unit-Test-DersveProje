import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);
  console.log(sepet);
  useEffect(() => {
    axios
      .get('http://localhost:3030/cesitler')
      .then((res) => setCesitler(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <h1 className="text-start">Çeşitler</h1>
      <p className="text-start">Tanesi 3$</p>
      <h2 className="text-start" data-testid="ucret">
        ÇeşitlerÜcret: {sepet.length * 3} $
      </h2>
      <div className="row d-flex gap-4">
        {cesitler.map((cesit) => (
          <div
            className="col-3 d-flex flex-column align-items-center mx-5"
            style={{ maxWidth: '150px' }}
          >
            <img
              id={cesit.name}
              className="w-100 "
              src={cesit.imagePath}
              alt="cesit"
            />
            <label htmlFor={cesit.name}>{cesit.name}</label>
            <div className="d-flex gap-3 my-3">
              <button className="btn btn-danger">Sıfırla</button>
              <span className="lead">0</span>
              <button
                id={cesit.name}
                className="btn btn-info"
                onClick={() => setSepet([...sepet, cesit])}
              >
                Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoops;
