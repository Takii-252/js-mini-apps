// ===================================
// 原稿用紙カウンター - JavaScript
// ===================================
//
// 【学んだこと】
// - .value: テキストエリアに入力された内容を取得
// - .length: 文字列の文字数を取得
// - Math.floor(a / b): 割り算の商（整数部分のみ）
// - %（パーセント）: 割り算の余り（例: 850 % 400 = 50）
// - テンプレートリテラル: `${変数}文字` のように変数と文字列を組み合わせる
// - innerHTML: HTMLタグ（<br>など）を含む内容を表示（textContentはテキストのみ）
// ===================================

// ----- 1. HTML要素を取得 -----
const Nyuuryoku = document.getElementById("nyuuryoku");
const Hanntei = document.getElementById("hanntei");
const Kekka = document.getElementById("kekka");

// ----- 2. ボタンクリック時の処理 -----
Hanntei.addEventListener("click", () => {
  // テキストエリアの内容を取得
  const nyuuryokunaiyou = Nyuuryoku.value;
  
  // 文字数を取得
  const mojisuu = nyuuryokunaiyou.length;
  
  // 原稿用紙の計算（400文字 = 1ページ）
  const amariseisuu = Math.floor(mojisuu / 400);  // ページ数（整数）
  const amarisyousuu = mojisuu % 400;             // 余り（現在のページの文字数）
  const nokorinseisuu = 400 - amarisyousuu;       // 次のページまでの残り

  // 結果を画面に表示（<br>で改行）
  Kekka.innerHTML = `${amariseisuu}ページ + ${amarisyousuu}文字 <br> 次のページまで${nokorinseisuu}文字`;
});
