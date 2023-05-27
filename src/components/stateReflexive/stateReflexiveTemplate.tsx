'use client';

import { useState } from 'react';

export const StateReflexiveTemplate: React.FC = (): JSX.Element => {
  const [stateDirect, setStateDirect] = useState<number>(0);
  const [stateCallback, setStateCallback] = useState<number>(0);

  console.log('Rendered');

  const increaseDirect = (): void => {
    setStateDirect(stateDirect + 1);
    setStateDirect(stateDirect + 1);
    setStateDirect(stateDirect + 1);
    setStateDirect(stateDirect + 1);
    setStateDirect(stateDirect + 1);
  };

  const increaseCallback = (): void => {
    setStateCallback((prev) => prev + 1);
    setStateCallback((prev) => prev + 1);
    setStateCallback((prev) => prev + 1);
    setStateCallback((prev) => prev + 1);
    setStateCallback((prev) => prev + 1);
  };

  return (
    <>
      <p>stateDirect:{stateDirect}</p>
      <p>
        <button onClick={increaseDirect}>increaseDirect</button>
      </p>
      <br />
      <p>stateCallback:{stateCallback}</p>
      <p>
        <button onClick={increaseCallback}>increaseCallback</button>
      </p>
    </>
  );
};
