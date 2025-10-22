const btn = document.getElementById('computeNum')
const answer = document.querySelector('.computed')
const num = document.getElementById('num')

btn.addEventListener('click', () => {
  
  if(!num.value || num.value < 1){
    answer.innerHTML = 'Введите положительное число'
  } else {
    let n = 1;
    for(let i = Number(num.value); i >= 1; i--){
      n *= i
    }
    answer.innerHTML = n
  }

})