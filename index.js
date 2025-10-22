const btn = document.getElementById('computeNum')
const answer = document.querySelector('.computed')
const num = document.getElementById('num')
const endGame = document.getElementById('endGame')
const newGame = document.getElementById('newGame')
const attemptCounter = document.getElementById('attemptCount')
const hint = document.getElementById('hint')
const hintContainer = document.getElementById('hintContainer')
const absResult = document.getElementById('absResult')
const winResult = document.getElementById('winResult')
const lostResult = document.getElementById('lostResult')
const exampleSelect = document.getElementById('exampleSelect')

let settings = {
  'easy': {
    attemptCount: 10,
    range: 50
  },
  'semieasy': {
    attemptCount: 7,
    range: 100
  },
  'hard': {
    attemptCount: 5,
    range: 100
  },
  'veryhard': {
    attemptCount: 9,
    range: 500
  },

}

let ranNum = Math.floor(Math.random() * (100 + 1))

let msg = ''
let attempt = 0
let attemptCount = 10

attemptCounter.innerHTML = attemptCount

absResult.innerHTML = 0
winResult.innerHTML = 0
lostResult.innerHTML = 0

exampleSelect.addEventListener('change', e => {
  ranNum = Math.floor(Math.random() * (settings[e.target.value].range + 1))
  attemptCount = settings[e.target.value].attemptCount
  btn.disabled = false
  endGame.disabled = false
  num.value = ''
  msg = ''
  answer.innerHTML = msg
  attempt = 0
  attemptCounter.innerHTML = attemptCount
  hint.style.display = 'none'
})

endGame.addEventListener('click', () => {
  msg = 'Игра завершена! Ответ: ' + ranNum
  btn.disabled = true
  endGame.disabled = true
  answer.innerHTML = msg
  lostResult.innerHTML = Number(lostResult.innerHTML) + 1
  absResult.innerHTML = Number(absResult.innerHTML) + 1
})

newGame.addEventListener('click', () => {
  btn.disabled = false
  endGame.disabled = false
  num.value = ''
  ranNum = Math.floor(Math.random() * (100 + 1))
  msg = ''
  answer.innerHTML = msg
  attempt = 0
  attemptCounter.innerHTML = attemptCount
  hint.style.display = 'none'
})

btn.addEventListener('click', () => {
  
  if(!num.value || num.value < 0 || num.value > 100 || !Number.isInteger(Number(num.value))){
    answer.innerHTML = 'Введите целое число от 0 до 100'
  } else {


      attempt++

      if(num.value == ranNum){
        msg = 'Поздравляю, вы угадали!'
        btn.disabled = true
        endGame.disabled = true
        absResult.innerHTML = Number(absResult.innerHTML) + 1
        winResult.innerHTML = Number(winResult.innerHTML) + 1
      }
      if(num.value > ranNum){
        msg = 'Слишком большое'
      }
      if(num.value < ranNum){
        msg = 'Слишком маленькое'
      }

      if(attempt >= attemptCount && !(num.value == ranNum)){
        msg = 'Количество попыток закончилось! Ответ: ' + ranNum
        btn.disabled = true
        endGame.disabled = true
        num.value = ''
        lostResult.innerHTML = Number(lostResult.innerHTML) + 1
        absResult.innerHTML = Number(absResult.innerHTML) + 1
      }
      
      

    attemptCounter.innerHTML = attemptCounter.innerHTML - 1
    answer.innerHTML = msg
    
    
    if(attemptCounter.innerHTML <= (attemptCount / 2)){
      hint.style.display = 'inline'
      hintContainer.title = 'от ' + ((ranNum - 10) > 0 ? ( ranNum - 10 ) : 0) + ' до ' + ((ranNum + 10) <= 100 ? ( ranNum + 10 ) : 100)
    }
  }

})