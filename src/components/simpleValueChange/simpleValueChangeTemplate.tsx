'use client';

import { useEffect } from 'react';

export const SimpleValueChangeTemplate: React.FC = (): JSX.Element => {
  let fooValue: number = 1;

  const changeValue = (): void => {
    console.log('Clicked!!');
    fooValue += 1;
  };

  useEffect(() => {
    console.log('fooValue: ', fooValue);
  }, [fooValue]);

  return (
    <p>
      <button onClick={changeValue}>インクリメント</button>
    </p>
  );
};
