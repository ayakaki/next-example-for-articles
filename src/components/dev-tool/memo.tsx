'use client';

import { memo, useState } from 'react';

const MemoComponent: React.FC = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="m-8 p-4 border border-1">
      <p>（メモ化あり・props受け取りなし）</p>
      <p>カウンター：{counter}</p>
      <button
        className="border border-1 border-gray-500 px-2 py-1"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        親カウントアップ
      </button>
    </div>
  );
};

MemoComponent.displayName = 'Memo';

export const Memo = memo(MemoComponent);
