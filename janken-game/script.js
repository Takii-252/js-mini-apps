// HTMLを取得
const Playertokuten = document.getElementById("player-tokuten");
const Computertokuten = document.getElementById("computer-tokuten");
const Guu = document.getElementById("guu");
const Cyoki = document.getElementById("cyoki");
const Paa = document.getElementById("paa");
const Kekka = document.getElementById("kekka");

// 状態管理の変数追加
let Playertokutenkanri = 1000;
let Computertokutenkanri= 1000;
let rensyo = 0;

Guu.addEventListener("click", () => {
  // グーを選んだ時の処理
  const result = "グー";
  const results = ["グー", "チョキ", "パー",];
  const random = results[Math.floor(Math.random() * results.length)];
  // randomという定数に配列で指定した中をランダムに取得する処理を書いているコード
  if(result === random){
    console.log('あいこ')
    rensyo = 0; 
  }else if(random === 'パー'){
    console.log('負け')
    Playertokutenkanri -= 100;
    Computertokutenkanri += 100;
    Playertokuten.textContent = 'あなた'+ Playertokutenkanri;
    Computertokuten.textContent = 'CPU'+ Computertokutenkanri; 
    rensyo = 0;   
  }else{
    console.log('勝ち')
    rensyo += 1;
    Playertokutenkanri += rensyo * 100; 
    Computertokutenkanri -= rensyo * 100;
    Playertokuten.textContent = 'あなた'+ Playertokutenkanri;
    Computertokuten.textContent = 'CPU'+ Computertokutenkanri;
  }

  Kekka.textContent = random;
  // 画面に出ている表示を更新する。ここでは勝ち、あいこ、負けの中から
  if(Playertokutenkanri <= 0){
    Kekka.textContent = '負け';
}
  if(Computertokutenkanri <= 0){
    Kekka.textContent = '勝ち';
}
});

Cyoki.addEventListener("click", () => {
  // グーを選んだ時の処理
  const result = "チョキ";
  const results = ["グー", "チョキ", "パー",];
  const random = results[Math.floor(Math.random() * results.length)];
  // randomという定数に配列で指定した中をランダムに取得する処理を書いているコード
  if(result === random){
    console.log('あいこ')
    rensyo = 0; 
  }else if(random === 'グー'){
    console.log('負け')
    Playertokutenkanri -= 100;
    Computertokutenkanri += 100;
    Playertokuten.textContent = 'あなた'+ Playertokutenkanri;
    Computertokuten.textContent = 'CPU'+ Computertokutenkanri;
    rensyo = 0;        
  }else{
    console.log('勝ち')
    rensyo += 1;
    Playertokutenkanri += rensyo * 100; 
    Computertokutenkanri -= rensyo * 100;
    Playertokuten.textContent = 'あなた'+ Playertokutenkanri;
    Computertokuten.textContent = 'CPU'+ Computertokutenkanri;
  }

  Kekka.textContent = random;
  // 画面に出ている表示を更新する。ここでは勝ち、あいこ、負けの中から
  if(Playertokutenkanri <= 0){
    Kekka.textContent = '負け';
}
  if(Computertokutenkanri <= 0){
    Kekka.textContent = '勝ち';
}
});

Paa.addEventListener("click", () => {
  // グーを選んだ時の処理
  const result = "パー";
  const results = ["グー", "チョキ", "パー",];
  const random = results[Math.floor(Math.random() * results.length)];
  // randomという定数に配列で指定した中をランダムに取得する処理を書いているコード
  if(result === random){
    console.log('あいこ')
    rensyo = 0; 
  }else if(random === 'チョキ'){
    console.log('負け')
    Playertokutenkanri -= 100;
    Computertokutenkanri += 100;
    Playertokuten.textContent = 'あなた'+ Playertokutenkanri;
    Computertokuten.textContent = 'CPU'+ Computertokutenkanri; 
    rensyo = 0;  
  }else{
    console.log('勝ち')
    rensyo += 1;
    Playertokutenkanri += rensyo * 100; 
    Computertokutenkanri -= rensyo * 100;
    Playertokuten.textContent = 'あなた'+ Playertokutenkanri;
    Computertokuten.textContent = 'CPU'+ Computertokutenkanri;
  }

  Kekka.textContent = random;
  // 画面に出ている表示を更新する。ここでは勝ち、あいこ、負けの中から
  if(Playertokutenkanri <= 0){
    Kekka.textContent = '負け';
}
  if(Computertokutenkanri <= 0){
    Kekka.textContent = '勝ち';
}
});