# sandbox-next

Next.js の細かい挙動の確認を取った際に残しておくリポジトリ

| 内容                                                     | アプリ URL                                                        |
| -------------------------------------------------------- | ----------------------------------------------------------------- |
| React Developer Tools の使用感確認                       | [/dev-tool](http://localhost:3000/dev-tool)                       |
| useEffect フックの第二引数に変数を指定した場合の挙動確認 | [/simple-value-change](http://localhost:3000/simple-value-change) |
| setState による state の更新の挙動確認                   | [/state-reflexive](http://localhost:3000/state-reflexive)         |

##　 React Developer Tools の使用感確認

![reactdev](https://github.com/ayakaki/sandbox-next/assets/65984887/ebfa1afc-361c-41f6-a112-656c3fa3a665)

## useEffect フックの第二引数に変数を指定した場合の挙動確認

- 結果：useEffect の第一引数のコールバック関数の処理は実行されない。
- 理由：useEffect の第二引数で変更を検知できるのは、React の状態管理で管理されている変数のみが対象だから。

![simpleValueChange](https://github.com/ayakaki/sandbox-next/assets/65984887/ff4a30b6-14bc-4dbf-816e-5cc0ebf17af5)

#### setState による state の更新の挙動確認

- 結果：
  - stateDirect →+1
  - stateCallback→+5
- 理由：
  - stateDirect：state をそのまま入れると、setState 実行時のスナップショットを使用してしまうので、1 回目から 5 回目のすべての setState の引数内は（1+1）になってしまい、結局、＋ 1 となる
  - stateCallback：コールバック処理が走る時の state（画面上のコンポーネントに紐づくスナップショットではない）を利用することができるので、毎度インクリメントされた state を使用することができるから、結局＋ 5 となる

![setState](https://github.com/ayakaki/sandbox-next/assets/65984887/8fb39da7-2b4f-476a-9569-c167173e4dc8)
