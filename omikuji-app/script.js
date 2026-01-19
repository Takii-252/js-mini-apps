// ===========================================
//   おみくじアプリ - JavaScript
// ===========================================

// ---------------------------------------------
// 1. HTML要素を取得
// ---------------------------------------------
// document.getElementById("id名") は、HTMLから要素を探して取得するメソッド
// 取得した要素を定数に保存しておくと、後から何度でも操作できる

const resultElement = document.getElementById("result");
// ↑ HTMLの <p id="count">0</p> を取得
// この定数を使って、数字の表示（textContent）や色（style.color）を変更できる

const drawButton = document.getElementById("draw");

const results = ["大吉", "中吉", "小吉", "凶"];


drawButton.addEventListener("click", () => {
    // ボタンがクリックされた時を刺すコード
    const random = results[Math.floor(Math.random() * results.length)];
    // randomという定数に配列で指定した中をランダムに取得する処理を書いているコード
    resultElement.textContent = random;
    // 画面に出ている表示を更新する。ここでは大吉、中吉、小吉、凶の中から
  }
);