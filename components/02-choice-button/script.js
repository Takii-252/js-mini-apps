// ===================================
// 選択肢ボタン - JavaScript
// ===================================

// 1. ボタンを取得
const choiceA = document.getElementById("choice-a");
const choiceB = document.getElementById("choice-b");

// 2. クリックした時の処理
// TODO: ここにクリック処理を追加してください！
// ヒント: ボタンをクリックしたら "selected" クラスを追加する
choiceA.addEventListener("click", () => {
  choiceA.classList.add("selected");
  choiceB.classList.remove("selected");
});

choiceB.addEventListener("click", () => {
  choiceB.classList.add("selected");
  choiceA.classList.remove("selected");
});