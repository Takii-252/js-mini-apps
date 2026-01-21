// ===================================
// ToDoアプリ - JavaScript
// 
// 【このアプリの動き】
// 1. ページを開く → 保存済みのタスクを表示
// 2. 「追加」ボタン → 新しいタスクが一覧に追加
// 3. 「完了」ボタン → タスクに取り消し線がつく
// 4. 「削除」ボタン → タスクが消える
// 5. ブラウザを閉じても → タスクは保存されている
// ===================================


// ========================================
// 1. HTML要素を取得
// ========================================
const taskInput = document.getElementById("task-input");
// ↑ 画面の「入力欄」を取得

const addBtn = document.getElementById("add-btn");
// ↑ 画面の「追加ボタン」を取得

const taskList = document.getElementById("task-list");
// ↑ 画面の「タスク一覧エリア」を取得（空の<ul>）


// ========================================
// 2. 保存されたタスクを読み込む
// ========================================
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// ↑ 【画面への影響】なし（裏で準備するだけ）
//
// 【何をしている？】
// ・ブラウザに保存されたタスクデータを取り出す
// ・保存されていなければ、空の配列 [] を用意する
//
// 【tasksの中身の例】
// [
//   { text: "牛乳を買う", completed: false },
//   { text: "宿題をやる", completed: true }
// ]


// ========================================
// 3. タスク一覧を画面に表示する関数
// ========================================
function renderTasks() {
  // ↑ 【この関数を呼ぶと】画面のタスク一覧が更新される
  
  taskList.innerHTML = "";
  // ↑ 【画面への影響】タスク一覧を空にする（リセット）
  //   まず全部消してから、新しく作り直す
  
  tasks.forEach((task, index) => {
    // ↑ tasks配列の「それぞれ」に対して処理する
    //   task = タスク1つ分のデータ（例: { text: "牛乳を買う", completed: false }）
    //   index = 何番目のタスクか（0, 1, 2...）
    
    const li = document.createElement("li");
    // ↑ 【画面への影響】まだなし
    //   新しい<li>タグを「作る」だけ（まだ画面には表示されない）
    
    li.innerHTML = `
      <span>${task.text}</span>
      <button class="complete-btn" data-index="${index}">完了</button>
      <button class="delete-btn" data-index="${index}">削除</button>
    `;
    // ↑ 【画面への影響】まだなし
    //   <li>の中身を設定する
    //
    //   【作られるHTMLのイメージ】
    //   <li>
    //     <span>牛乳を買う</span>
    //     <button class="complete-btn">完了</button>
    //     <button class="delete-btn">削除</button>
    //   </li>
    
    if (task.completed) {
      li.classList.add("completed");
      // ↑ 【画面への影響】タスクに取り消し線がつく
      //   completed が true なら、CSSの .completed が適用される
    }
    
    taskList.appendChild(li);
    // ↑ 【画面への影響】★ここでやっと画面に表示される！★
    //   作った<li>を、<ul id="task-list">の中に追加する
  });
}


// ========================================
// 4. タスクを保存する関数
// ========================================
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // ↑ 【画面への影響】なし（裏でデータを保存するだけ）
  //   ブラウザを閉じても、このデータは残る
}


// ========================================
// 5. 「追加」ボタンをクリックした時
// ========================================
addBtn.addEventListener("click", () => {
  // ↑ 「追加」ボタンがクリックされたら、以下を実行
  
  const text = taskInput.value.trim();
  // ↑ 【画面への影響】なし
  //   入力欄に入力された文字を取得（前後の空白は削除）
  
  if (text) {
    // ↑ 何か入力されていれば...
    
    tasks.push({ text: text, completed: false });
    // ↑ 【画面への影響】まだなし
    //   tasks配列に新しいタスクを追加
    
    saveTasks();
    // ↑ 【画面への影響】なし（保存するだけ）
    
    renderTasks();
    // ↑ 【画面への影響】★タスク一覧が更新される！★
    //   新しく追加したタスクが画面に表示される
    
    taskInput.value = "";
    // ↑ 【画面への影響】入力欄が空になる
  }
});


// ========================================
// 6. Enterキーでも追加できるように
// ========================================
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
    // ↑ 【画面への影響】「追加」ボタンをクリックしたのと同じ動作
  }
});


// ========================================
// 7. タスクの「完了」「削除」ボタンをクリックした時
// ========================================
taskList.addEventListener("click", (event) => {
  // ↑ タスク一覧エリアのどこかがクリックされたら...
  
  // ----- 削除ボタンがクリックされた場合 -----
  if (event.target.classList.contains("delete-btn")) {
    const index = event.target.dataset.index;
    // ↑ 何番目のタスクがクリックされたか取得
    
    tasks.splice(index, 1);
    // ↑ 【画面への影響】まだなし
    //   tasks配列からそのタスクを削除
    
    saveTasks();
    renderTasks();
    // ↑ 【画面への影響】★タスクが消える！★
  }
  
  // ----- 完了ボタンがクリックされた場合 -----
  if (event.target.classList.contains("complete-btn")) {
    const index = event.target.dataset.index;
    
    tasks[index].completed = !tasks[index].completed;
    // ↑ 【画面への影響】まだなし
    //   completed を true ↔ false に切り替え
    
    saveTasks();
    renderTasks();
    // ↑ 【画面への影響】★取り消し線がつく/消える！★
  }
});


// ========================================
// 8. ページを開いた時にタスクを表示
// ========================================
renderTasks();
// ↑ 【画面への影響】保存されていたタスクが一覧に表示される
