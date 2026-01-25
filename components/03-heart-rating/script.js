// ===================================
// ハート評価 - JavaScript
// ===================================


// ========================================
// 1. HTML要素を取得
// ========================================
const hearts = document.querySelectorAll(".heart");
// ↑ querySelectorAll = 複数の要素をまとめて取得
//   ".heart" = class="heart" の要素すべて
//   結果: [♥, ♥, ♥, ♥, ♥] の配列のようなもの（NodeList）

const ratingValue = document.getElementById("rating-value");
// ↑ 評価値を表示する要素（「3.5」などを表示する場所）


// ========================================
// 2. 現在の評価（状態管理）
// ========================================
let currentRating = 0;
// ↑ 現在選択されている評価値を保存する変数
//   0, 0.5, 1, 1.5, 2, ... 5 のいずれかが入る


// ========================================
// 3. ハートをクリックした時の処理
// ========================================
hearts.forEach((heart) => {
  // ↑ forEach = 配列の各要素に対して処理を実行
  //   heart = 1つのハート要素（ループごとに変わる）
  
  heart.addEventListener("click", (event) => {
    // ↑ 各ハートにクリックイベントを設定
    //   (event) = クリックの詳細情報を受け取る
    //   eventには「どこをクリックしたか」などの情報が入っている
    
    
    // ----- クリック位置を取得 -----
    const clickX = event.offsetX;
    // ↑ event.offsetX = クリックした位置（ハートの左端から何px）
    //   例: ハートの左端付近をクリック → 5くらい
    //   例: ハートの右端付近をクリック → 40くらい
    
    const heartWidth = heart.offsetWidth;
    // ↑ heart.offsetWidth = ハートの幅（px）
    //   例: 48px
    
    
    // ----- 左半分か右半分かを判定 -----
    if (clickX < heartWidth / 2) {
      // ↑ クリック位置がハートの幅の半分より小さい = 左半分
      //   例: heartWidth = 48 なら、24px より左がクリックされた
      
      currentRating = heart.dataset.value - 0.5;
      // ↑ heart.dataset.value = HTMLのdata-value属性の値（1〜5）
      //
      // 【重要】data-属性とは？
      //   HTMLで data-〇〇="値" と書くと、
      //   JavaScriptで element.dataset.〇〇 で取得できる
      //
      //   HTMLの例:
      //     <span class="heart" data-value="3">♥</span>
      //                         ^^^^^^^^^^^^
      //   JavaScriptでの取得:
      //     heart.dataset.value  →  "3"
      //
      // 計算例: 3番目のハートの左半分をクリック → 3 - 0.5 = 2.5
      
      heart.classList.add("half");
      // ↑ CSSの .half クラスを追加（半分塗りつぶしのスタイル）
      
    } else {
      // ↑ クリック位置がハートの幅の半分以上 = 右半分
      
      currentRating = heart.dataset.value;
      // ↑ そのままの値（例: 3番目のハートの右半分 → 3）
      //   ※ dataset.value は文字列だが、計算時に自動で数値になる
      
      heart.classList.add("filled");
      // ↑ CSSの .filled クラスを追加（完全塗りつぶしのスタイル）
    }
    
    updateHearts();
    // ↑ すべてのハートの見た目を更新する関数を呼び出す
  });
});


// ========================================
// 4. ハートの表示を更新する関数
// ========================================
// 【この関数の役割】
//   currentRating の値に応じて、すべてのハートの見た目を更新する
//   例: currentRating = 2.5 なら
//       → 1番目、2番目: filled（塗りつぶし）
//       → 3番目: half（半分）
//       → 4番目、5番目: 空
//
function updateHearts() {
  hearts.forEach((heart, index) => {
    // ↑ forEach の引数について：
    //   - 1つ目 (heart): 配列の各要素（今回は各ハート）
    //   - 2つ目 (index): 何番目か（0から始まる番号）★任意★
    //
    // 【重要】index は必要な時だけ書けばOK
    //   - 番号が不要な場合: forEach((heart) => { ... })
    //   - 番号が必要な場合: forEach((heart, index) => { ... })
    //
    // 今回は「このハートが何番目か」を知りたいので index を使っている
    
    const value = index + 1;
    // ↑ index は0から始まるので、+1して人間が数える番号（1〜5）にする
    //
    //   | index | value | 意味         |
    //   |-------|-------|--------------|
    //   | 0     | 1     | 1番目のハート |
    //   | 1     | 2     | 2番目のハート |
    //   | 2     | 3     | 3番目のハート |
    //   | 3     | 4     | 4番目のハート |
    //   | 4     | 5     | 5番目のハート |
    
    
    // ----- クラスをリセット -----
    heart.classList.remove("filled", "half");
    // ↑ まず全部のクラスを外す（まっさらな状態にする）
    //   これがないと、前の状態が残ったままになる
    
    
    // ----- 状態に応じてクラスを追加 -----
    //
    // 【具体例】currentRating = 2.5 の時、5つのハートはこう判定される：
    //
    //   | ハート | value | value <= 2.5? | value-0.5 === 2.5? | 結果     |
    //   |--------|-------|---------------|---------------------|----------|
    //   | 1番目  | 1     | ✅ true       | -                   | filled   |
    //   | 2番目  | 2     | ✅ true       | -                   | filled   |
    //   | 3番目  | 3     | ❌ false      | ✅ true (2.5===2.5) | half     |
    //   | 4番目  | 4     | ❌ false      | ❌ false (3.5≠2.5)  | 空       |
    //   | 5番目  | 5     | ❌ false      | ❌ false (4.5≠2.5)  | 空       |
    //
    if (value <= currentRating) {
      // ↑ このハートの番号が評価値以下なら塗りつぶす
      
      heart.classList.add("filled");
      
    } else if (value - 0.5 === currentRating) {
      // ↑ このハートの番号 - 0.5 が評価値と等しいなら半分
      //   → 評価値が「◯.5」の時、その次のハートが半分になる
      
      heart.classList.add("half");
    }
    // ↑ どちらでもなければ何もしない（空のまま）
  });
  
  ratingValue.textContent = currentRating;
  // ↑ 【画面への影響】評価値を表示（例: "2.5"）
}
