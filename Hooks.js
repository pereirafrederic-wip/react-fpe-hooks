import React, { useState } from 'react';

export default function Hooks() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(1);

  return (
    <div>
      <p>Vous avez cliqué {count} fois et {countTwo}</p>
      <button onClick={() => {
        setCount(count + 1);
        setCountTwo(count *2);
        }
        }>
        Cliquez ici
      </button>
    </div>
  );
}