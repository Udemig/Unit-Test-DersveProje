import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Scoops = () => {
  const [cesitler, setCesitler] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3030/cesitler')
      .then((res) => setCesitler(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <h1>Çeşitler</h1>
      <p>Tanesi 3$</p>
      <div className="row d-flex gap-4">
        {cesitler.map((cesit) => (
          <div className="col-3" style={{ maxWidth: '350px' }}>
            <img className="w-100 " src={cesit.imagePath} />
            <label>{cesit.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoops;
