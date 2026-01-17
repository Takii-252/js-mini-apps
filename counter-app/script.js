// ===========================================
//   カウンターアプリ - JavaScript
// ===========================================

// ---------------------------------------------
// 1. HTML要素を取得
// ---------------------------------------------
// document.getElementById("id名") でHTMLの要素を取得できる
// 取得した要素を定数に保存しておくと、後から操作しやすい

const countElement = document.getElementById("count");
// ↑ id="count" の要素（数字を表示している <p> タグ）を取得
// この定数を使って、数字の表示や色を変更できる

const incrementButton = document.getElementById("increment");
// ↑ id="increment" の要素（+ボタン）を取得

const decrementButton = document.getElementById("decrement");
// ↑ id="decrement" の要素（-ボタン）を取得


// ---------------------------------------------
// 2. 変数の定義
// ---------------------------------------------

let count = 0;
// ↑ カウントの現在値。初期値は 0
// let を使うのは、値が増えたり減ったりするから（const だと変更不可）

let previousTens = 0;
// ↑ 前回の「10の位」を記憶する変数
// 10を超えるたびに色を変えるため、前回の10の位を覚えておく


// ---------------------------------------------
// 3. ランダムな色を生成する関数
// ---------------------------------------------
// 関数 = 処理をまとめて名前をつけたもの。何度でも呼び出せる

const getRandomColor = () => {
  // Math.random() → 0〜0.999...のランダムな小数を生成
  // Math.random() * 256 → 0〜255.999...
  // Math.floor() → 小数点以下を切り捨て → 0〜255の整数
  
  const r = Math.floor(Math.random() * 256);
  // ↑ 赤の値（0〜255のランダムな整数）
  
  const g = Math.floor(Math.random() * 256);
  // ↑ 緑の値
  
  const b = Math.floor(Math.random() * 256);
  // ↑ 青の値
  
  return `rgb(${r}, ${g}, ${b})`;
  // ↑ 3つの色を合成した文字列を返す
  // 例: "rgb(120, 50, 200)"
};


// ---------------------------------------------
// 4. ボタンがクリックされたときの処理
// ---------------------------------------------
// addEventListener("click", 関数) でクリック時の処理を設定できる
// () => { } はアロー関数（Progateで習った！）

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
  // 例: count=15 → 1、count=25 → 2
  
  // 10の位が変わったら色を変える
  if (currentTens !== previousTens) {
    // ↑ !== は「等しくない」という意味
    countElement.style.color = getRandomColor();
    // ↑ 要素.style.プロパティ = 値 でCSSを直接変更できる
    // getRandomColor() を呼び出してランダムな色を設定
    
    previousTens = currentTens;
    // ↑ 前回の10の位を更新（次回の比較のため）
  }
});


// -ボタンがクリックされたとき
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
