import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const newBtnColor = btnColor === 'red' ? 'blue' : 'red'; //terneray operator
  // ENABEL DISABLE
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <button
        style={{ backgroundColor: isChecked ? 'gray' : btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={isChecked}
      >
        Change to {newBtnColor}
      </button>
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      <label>Disable Button</label>
    </div>
  );
}

export default App;
