// ===========================================
//   電卓アプリ - JavaScript
//
//   【新しい概念】
//   ・querySelectorAll() - 複数の要素をまとめて取得
//   ・forEach() - 「それぞれに対して」処理を実行
//   ・eval() - 文字列を計算式として実行
//   ・try-catch - if-elseと同じ「構文」の一つ。エラー処理用。
// ===========================================

// ---------------------------------------------
// 1. HTML要素を取得
// ---------------------------------------------

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");


// ---------------------------------------------
// 2. 現在の入力を保持する変数
// ---------------------------------------------

let currentInput = "";
// ↑ ユーザーが入力中の計算式（文字列）
//   ボタンを押すたびに変化: "" → "7" → "78" → "78+"


// ---------------------------------------------
// 3. 数字ボタンのイベント設定
// ---------------------------------------------

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.textContent = currentInput;
  });
});


// ---------------------------------------------
// 4. 演算子ボタンのイベント設定
// ---------------------------------------------

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.textContent = currentInput;
  });
});


// ---------------------------------------------
// 5. クリアボタンのイベント設定
// ---------------------------------------------

clearButton.addEventListener("click", () => {
  currentInput = "";
  display.textContent = "0";
});


// ---------------------------------------------
// 6. イコールボタンのイベント設定
// ---------------------------------------------

equalsButton.addEventListener("click", () => {
  
  // =============================================
  // 【try-catch 構文】
  // if-else と同じ「構文（制御文）」の一つ。関数ではない。
  //
  // try { } → 「これを試してみて」
  // catch { } → 「エラーが起きたらこっちを実行」
  //
  // 使う場面: エラーが起きる可能性があるコードを書くとき
  // 例: 外部APIとの通信、ユーザー入力の処理など
  // =============================================
  
  try {
    
    const result = eval(currentInput);
    // ↑ eval() = 文字列を計算式として実行
    //   "7+3*2" という文字列 → 13 という数値に
    //   ここでエラーが起きる可能性がある（"7++" など不正な式）
    
    display.textContent = result;
    currentInput = String(result);
    // ↑ 計算結果を保持して、続けて計算できる（13 + 5 = 18）
    
  } catch (error) {
    
    // =============================================
    // 【エラー発生時の処理】
    //
    // Q: コードは何行目に戻る？
    // A: 特定の行には「戻らない」！
    //
    // 【JavaScriptの動き方】
    // JavaScriptは「イベント駆動」という仕組み。
    // 1. ボタンが押されるのを待つ（待機状態）
    // 2. ボタンが押されたら、その処理を実行
    // 3. 処理が終わったら、また待機状態に戻る
    //
    // つまり、catch ブロックが終わったら：
    // → プログラムは「次のボタンが押されるのを待つ」状態になる
    // → 37行目に「戻る」のではなく、「待機」している
    // → 次に数字ボタンを押せば、新しい計算が始まる
    // =============================================
    
    display.textContent = "Error";
    currentInput = "";
    // ↑ 入力をリセット（空文字に戻す）
    //   次にボタンを押せば、新しい計算が始まる
  }
});
