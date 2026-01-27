// ===================================
// モーダル - JavaScript
// ===================================
// 
// 【学んだこと】
// - event.target: クリックイベントで「実際にクリックされた要素」を取得できる
// - 要素の比較: event.target === 要素 で、クリックされた要素を判定できる
// - if文はelseなしでも使える: 条件に当てはまるときだけ処理したい場合はifだけでOK
// ===================================

// ----- 1. HTML要素を取得 -----
const openBtn = document.getElementById("open-btn");
const cancelBtn = document.getElementById("cancel-btn");
const okBtn = document.getElementById("ok-btn");
const modalOverlay = document.getElementById("modal-overlay");

// ----- 2. モーダルを開く -----
openBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  // activeクラスを追加 → CSSで opacity: 1 になり表示される
});

// ----- 3. キャンセルボタンでモーダルを閉じる -----
cancelBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  // activeクラスを削除 → CSSで opacity: 0 になり非表示になる
});

// ----- 4. OKボタンでモーダルを閉じる -----
okBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  console.log("OKが押されました");
  // ここに実際の処理を追加（削除処理など）
});

// ----- 5. 背景（オーバーレイ）クリックでモーダルを閉じる -----
// event.target を使って「どこがクリックされたか」を判定
// - オーバーレイ自体がクリックされた → 閉じる
// - モーダル内（白いボックス）がクリックされた → 何もしない（閉じない）
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
  // elseは不要！モーダル内クリック時は何もしないのでifだけでOK
});