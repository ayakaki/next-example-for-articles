'use client';

import { Memo } from './memo';
import { NoReceiveNoMemo } from './noReceiveNoMemo';
import { ReceiveMemo } from './receiveMemo';
import { ReceiveMemoNoUsecallback } from './receiveMemoNoUsecallback';
import { useCallback, useState } from 'react';

export const DevToolTemplate: React.FC = (): JSX.Element => {
  const [counterParent, setCounterParent] = useState<number>(0);

  const incrementCounterParent = (): any => {
    setCounterParent((prev) => prev + 1);
  };

  const useCallbackIncrementCounterParent = useCallback(() => {
    setCounterParent((prev) => prev + 1);
  }, []);

  return (
    <div className="border border-1 container mx-auto p-4 mt-10">
      <p>親</p>
      <p>カウンター：{counterParent}</p>
      <button
        className="border border-1 border-gray-500 px-2 py-1"
        onClick={() => {
          setCounterParent((prev) => prev + 1);
        }}
      >
        親カウントアップ
      </button>
      <NoReceiveNoMemo />
      <Memo />
      <ReceiveMemo increment={useCallbackIncrementCounterParent} />
      <ReceiveMemoNoUsecallback increment={incrementCounterParent} />
    </div>
  );
};
