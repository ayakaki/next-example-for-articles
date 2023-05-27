import Link from 'next/link';

export const HomeTemplate: React.FC = (): JSX.Element => {
  return (
    <div className="">
      <h1>Home</h1>
      <ul className="ml-8">
        <li className="list-disc">
          <Link href="/dev-tool" className="underline">
            React Developer Toolsの使用感確認
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/simple-value-change" className="underline">
            useEffectフックの第二引数に変数を指定した場合の挙動確認
          </Link>
        </li>
        <li className="list-disc">
          <Link href="/state-reflexive" className="underline">
            setStateによるstateの更新についての挙動確認（直接 /
            コールバック関数）
          </Link>
        </li>
      </ul>
    </div>
  );
};
