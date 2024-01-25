## Front

### ディレクトリ構成と役割
```
src
├ components
├ templates
├ pages
├ hooks
└ api

components：
functional（副反応なし）ディレクトリ内にコンポーネントファイル＆Storybookファイル＆テストファイルを格納すること

templates：
（副反応あり）

pages：
Nextでしかできない処理を行う

hooks：
React hoooksなど

api：
具体的なAPIの定義
