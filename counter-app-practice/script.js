const countElement = document.getElementById('count');

const incrementButton = document.getElementById('increment');

const decrementButton = document.getElementById('decrement');


let count = 0;

let previousTens = 0;

const getRandomColor = () =>{

    const r = Math.floor(Math.random() * 256);

    const g = Math.floor(Math.random() * 256);

    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;

};

incrementButton.addEventListener('click',() =>{
    count += 1;

    countElement.textContent = count;

    const currentTens = Math.floor(count/10);

    if(currentTens !== previousTens){

        countElement.style.color = getRandomColor();

        previousTens = currentTens;
    }

});

decrementButton.addEventListener("click", () => {
  count -= 1;

  countElement.textContent = count;

  const currentTens = Math.floor(count / 10);
  
  if (currentTens !== previousTens) {
    countElement.style.color = getRandomColor();
    previousTens = currentTens;
  }
});
