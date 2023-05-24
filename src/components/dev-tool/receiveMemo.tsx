'use client';

import { memo, useState } from 'react';

type Props = {
  increment: () => void;
};

const ReceiveMemoComponent: React.FC<Props> = (props: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="m-8 p-4 border border-1">
      <p>子（メモ化あり・props受け取りあり※useCallback使用）</p>
      <p>子カウンター：{counter}</p>
      <button
        className="border border-1 border-gray-500 px-2 py-1 mr-2"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        子カウントアップ
      </button>
      <button
        className="border border-1 border-gray-500 px-2 py-1"
        onClick={props.increment}
      >
        親カウントアップ
      </button>
    </div>
  );
};

ReceiveMemoComponent.displayName = 'ReceiveMemo';

export const ReceiveMemo = memo(ReceiveMemoComponent);
