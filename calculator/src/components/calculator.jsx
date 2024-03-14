import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (event) => {
    const value = event.target.innerHTML;
    switch(value) {
      case 'AC':
        setDisplay('');
        break;
      case '=':
        try {
          setDisplay(eval(display).toString());
        } catch {
          setDisplay("Error");
        }
        break;
      default:
        setDisplay(display + value);
    }
  };

  return (
    <div className='maindiv'>
        <h1>Calculator</h1>
        <div className='container'>
            <input type='text' id='display' className='display' value={display} readOnly />
            <div className='buttons'>
                <button onClick={handleClick} className='number'>7</button>
                <button onClick={handleClick} className='number'>8</button>
                <button onClick={handleClick} className='number'>9</button>
                <button onClick={handleClick} className='operator'>AC</button>
                <button onClick={handleClick} className='number'>4</button>
                <button onClick={handleClick} className='number'>5</button>
                <button onClick={handleClick} className='number'>6</button>
                <button onClick={handleClick} className='operator'>/</button>            
                <button onClick={handleClick} className='number'>1</button>
                <button onClick={handleClick} className='number'>2</button>
                <button onClick={handleClick} className='number'>3</button>
                <button onClick={handleClick} className='operator'>*</button>
                <button onClick={handleClick} className='number'>0</button>
                <button onClick={handleClick} className='operator'>-</button>
                <button onClick={handleClick} className='operator'>+</button>
                <button onClick={handleClick} className='number'>.</button>
                <button onClick={handleClick} className='operator'>=</button>
            </div>
        </div>
    </div>
  );
}

export default Calculator;