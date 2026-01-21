// ===================================
// ログインフォーム - JavaScript
// ===================================

// ----- フォーム要素を取得 -----
const form = document.getElementById("login-form");
// ↑ HTMLの <form id="login-form"> を取得


// ----- フォーム送信時の処理 -----
form.addEventListener("submit", (event) => {
  // ↑ "submit" = フォームが「送信」された時のイベント
  //   HTMLの <button type="submit"> をクリックすると発火
  //   または、入力欄でEnterキーを押しても発火
  //
  // (event) = 発生したイベントの詳細情報が入ったオブジェクト
  //   どのキーが押されたか、どの要素がクリックされたか、など
  
  event.preventDefault();
  // ↑ 【重要】デフォルトの動作を止める
  //
  // フォームのsubmitイベントは、デフォルトで「ページをリロード」する
  // これを止めないと、送信ボタンを押すたびにページがリロードされてしまう
  //
  // preventDefault() = 「デフォルトの動作を防ぐ」
  

  // ----- 入力された値を取得 -----
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // ↑ .value = 入力欄に「入力された値」を取得するプロパティ
  //
  // 【.textContent と .value の違い】
  // .textContent → <p>などの「中のテキスト」を取得
  // .value → <input>などの「入力された値」を取得
  //
  // 例: メール欄に "test@mail.com" と入力した場合
  //     email の値は "test@mail.com" になる


  // ----- バリデーション（入力チェック） -----
  if (email && password) {
    // ↑ email と password が「両方とも入力されているか」をチェック
    //
    // JavaScriptでは、空文字 "" は false 扱い
    // なので、if (email && password) は
    // 「emailが空じゃない AND passwordが空じゃない」という意味
    
    alert("ログイン成功！\nメール: " + email);
    // ↑ 実際のアプリでは、ここでサーバーに送信して認証する
    //   今回は学習用なので、アラートで表示するだけ
    
  } else {
    alert("メールアドレスとパスワードを入力してください");
  }
});
