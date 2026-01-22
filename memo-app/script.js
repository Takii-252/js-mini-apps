// ========================================
// 1. HTML要素を取得
// ========================================
const memoInput = document.getElementById("memo-input");
// ↑ 画面の「入力欄」を取得

const addBtn = document.getElementById("add-btn");
// ↑ 画面の「追加ボタン」を取得

const memoList = document.getElementById("memo-list");
// ↑ 画面の「メモエリア」を取得（空の<ul>）


// ========================================
// 2. 「追加」ボタンをクリックした時
// ========================================
addBtn.addEventListener("click", () => {
  // ↑ 「追加」ボタンがクリックされたら、以下を実行
  
  const text = memoInput.value.trim();
  // ↑ 入力欄に入力された文字を取得（前後の空白は削除）

  if (text) {
    // ↑ 何か入力されていれば...

    // 1. 空の箱（<li>）を作る
    const li = document.createElement("li");

    // 2. 箱の中にテキストを入れる
    li.textContent = text;

    // 3. ランダム色を設定
    const colors = ["#FFE4E1", "#E0FFFF", "#F0FFF0", "#FFF0F5", "#F5F5DC"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // ↑ 配列からランダムに1色を選ぶ
    li.style.backgroundColor = randomColor;
    // ↑ 選んだ色を背景色に設定
    
    // 4. 箱をリストに配置する
    memoList.appendChild(li);
    
    // 5. 入力欄を空にする
    memoInput.value = "";
  }
});