// ===========================================
//   カウンターアプリ - JavaScript
// ===========================================

// ---------------------------------------------
// 1. HTML要素を取得
// ---------------------------------------------
// document.getElementById("id名") でHTMLの要素を取得できる
// 取得した要素は定数に保存しておくと、後から操作しやすい

const countElement = document.getElementById("count");
// ↑ id="count" の要素（数字を表示している <p> タグ）を取得

const incrementButton = document.getElementById("increment");
// ↑ id="increment" の要素（+ボタン）を取得

const decrementButton = document.getElementById("decrement");
// ↑ id="decrement" の要素（-ボタン）を取得


// ---------------------------------------------
// 2. カウント用の変数
// ---------------------------------------------
// カウントは増えたり減ったりするので let を使う（const だと変更不可）

let count = 0;
// ↑ カウントの初期値は 0


// ---------------------------------------------
// 3. ボタンがクリックされたときの処理
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
});

// -ボタンがクリックされたとき
decrementButton.addEventListener("click", () => {
  count -= 1;
  // ↑ count を 1 減らす

  countElement.textContent = count;
  // ↑ 画面に表示されている数字を更新する
});
