import React, { useRef, useState, useEffect } from 'react';

const Useref = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(number);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      numberRef.current += 1;
    } else if (event.key === 'ArrowDown') {
      numberRef.current -= 1;
    }
    setNumber(numberRef.current);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <p>Current Number: {number}</p>
      <p>Use the Up and Down arrow keys to increment or decrement the number.</p>
    </div>
  );
};

export default Useref;

