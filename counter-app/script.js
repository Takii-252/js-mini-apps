// ===========================================
//   カウンターアプリ - JavaScript
// ===========================================

// ---------------------------------------------
// 1. HTML要素を取得
// ---------------------------------------------
// document.getElementById("id名") は、HTMLから要素を探して取得するメソッド
// 取得した要素を定数に保存しておくと、後から何度でも操作できる

const countElement = document.getElementById("count");
// ↑ HTMLの <p id="count">0</p> を取得
// この定数を使って、数字の表示（textContent）や色（style.color）を変更できる

const incrementButton = document.getElementById("increment");
// ↑ HTMLの <button id="increment">+</button> を取得

const decrementButton = document.getElementById("decrement");
// ↑ HTMLの <button id="decrement">-</button> を取得


// ---------------------------------------------
// 2. 変数の定義
// ---------------------------------------------
// let = 後から値を変更できる変数
// const = 一度決めたら変更できない定数

let count = 0;
// ↑ カウントの現在値。初期値は 0
// ボタンを押すたびに増減するので let を使う

let previousTens = 0;
// ↑ 「前回の10の位」を記憶する変数
// 例: count=15 のとき previousTens=1（10の位が1）
// 10を超えるたびに色を変えるため、前回の10の位と今回を比較する用


// ---------------------------------------------
// 3. ランダムな色を生成する関数
// ---------------------------------------------
// 関数 = 処理をまとめて名前をつけたもの。何度でも呼び出せる
// const 関数名 = () => { 処理 }; という形式（アロー関数）

const getRandomColor = () => {
  // ------------------------------------
  // Math = JavaScriptに最初から用意されている「計算用の道具箱」
  // Math.random() = 0〜0.999...のランダムな小数を生成
  // Math.floor() = 小数点以下を切り捨てて整数にする
  // ------------------------------------
  
  // Math.random() * 256 → 0〜255.999...のランダムな数
  // Math.floor() で整数に → 0〜255 の整数
  
  const r = Math.floor(Math.random() * 256);
  // ↑ 赤(Red)の値。0〜255のランダムな整数
  
  const g = Math.floor(Math.random() * 256);
  // ↑ 緑(Green)の値。0〜255のランダムな整数
  
  const b = Math.floor(Math.random() * 256);
  // ↑ 青(Blue)の値。0〜255のランダムな整数
  
  return `rgb(${r}, ${g}, ${b})`;
  // ↑ return = この関数を呼び出したところに、この値を返す
  // ------------------------------------
  // テンプレートリテラル（バッククォート `` で囲む）
  // ${変数} で変数を文字列の中に埋め込める
  // 結果の例: "rgb(120, 50, 200)"
  // ------------------------------------
  // RGB = 色を作る3つの要素（赤・緑・青）
  // 3つを混ぜると色が作れる
  // rgb(255,0,0) = 真っ赤、rgb(0,255,0) = 真緑、rgb(0,0,255) = 真っ青
  // ------------------------------------
};


// ---------------------------------------------
// 4. ボタンがクリックされたときの処理
// ---------------------------------------------
// addEventListener("click", 関数) = クリックされたとき、関数を実行する
// () => { } はアロー関数。Progateで習った！

// +ボタンがクリックされたとき
incrementButton.addEventListener("click", () => {
  count += 1;
  // ↑ count を 1 増やす（count = count + 1 と同じ意味）

  countElement.textContent = count;
  // ↑ 画面に表示されている数字を更新する
  // textContent = 要素の中のテキストを変更するプロパティ

  // 現在の10の位を計算
  const currentTens = Math.floor(count / 10);
  // ↑ count を 10 で割って小数点以下を切り捨て
  // 例: count=5 → 0、count=15 → 1、count=25 → 2
  
  // 10の位が変わったら色を変える
  if (currentTens !== previousTens) {
    // ↑ !== は「等しくない」という意味
    // 前回の10の位と今回の10の位が違うとき、中の処理を実行
    
    countElement.style.color = getRandomColor();
    // ↑ 要素.style.プロパティ = 値 でCSSを直接変更できる
    // getRandomColor() を呼び出すと、"rgb(120,50,200)" のような文字列が返ってくる
    // その文字列を color に設定 → 文字の色が変わる！
    
    previousTens = currentTens;
    // ↑ 前回の10の位を更新（次回の比較のために記憶しておく）
  }
});


// -ボタンがクリックされたとき（+ボタンとほぼ同じ処理）
decrementButton.addEventListener("click", () => {
  count -= 1;
  // ↑ count を 1 減らす

  countElement.textContent = count;
  // ↑ 画面に表示されている数字を更新する

  // 現在の10の位を計算
  const currentTens = Math.floor(count / 10);
  
  // 10の位が変わったら色を変える
  if (currentTens !== previousTens) {
    countElement.style.color = getRandomColor();
    previousTens = currentTens;
  }
});
