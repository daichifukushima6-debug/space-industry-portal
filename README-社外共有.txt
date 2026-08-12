宇宙産業ポータル｜社外共有ガイド
================================

■ 最初に開くファイル
index.html

■ 共有方法A：ZIPファイルを直接送る
1. space-industry-portal-share.zip を相手に送付します。
2. 相手側でZIPを展開します。
3. 展開したフォルダー内の index.html をブラウザで開きます。

注意：会社のセキュリティ設定によっては、ローカルHTMLのJavaScript実行が制限される場合があります。
その場合は共有方法Bを利用してください。

■ 共有方法B：URLで共有する（推奨）
静的サイト用のホスティングサービス、または自社のWebサーバーにZIPの内容を配置します。
公開後に発行されたURLを共有先へ送付してください。

Cloudflare Pagesの場合：
1. Cloudflareの「Workers & Pages」を開きます。
2. 「Create application」→「Drag and drop your files」を選択します。
3. このZIP、または展開したフォルダーをアップロードします。
4. 「Deploy site」を実行します。
5. 発行された pages.dev のURLを共有します。

■ 社外共有前の確認事項
・「調査中」と表示される市場規模があることを共有先へ説明する
・SpaceXのバリュエーションは推定値であり、評価日と前提条件を確認する
・企業名、スタートアップ名、プロジェクト情報の最新性を確認する
・機密情報、社内限定情報、個人情報が含まれていないことを確認する
・必要に応じて「参考情報であり、投資判断を目的としない」旨を追記する
・不特定多数に公開しない場合は、会社指定のアクセス制限付き環境を使用する

■ ファイル構成
index.html                         トップページ
markets.js                        市場・企業・ユースケースの共通データ
detail.html                       市場カテゴリ詳細ページ
investors.html / investors.js     投資家ページ
projects.html / projects.js       プロジェクトページ
spacecraft-anatomy.html            宇宙機・部品のインタラクティブページ
space-infrastructure-orbits.html   宇宙インフラ・高度の解説ページ
spacex.html                        SpaceX情報ページ

このサイトは静的HTML、CSS、SVG、JavaScriptで構成されています。
サーバー側プログラムやデータベースは使用していません。
