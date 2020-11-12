const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let  = document.getElementById('input')
const display = document.querySelector('.display')
const answer = document.getElementById('answer')


let result = 0




function plusFunction() {
   result += parseInt(input.value)
   answer.innerHTML = result
   if (result < 0) {
    answer.style.color = 'red'
   }
    else if (result >= 0) {
        answer.style.color = 'black'
   }
}

function minusFunction() {
    result -= parseInt(input.value)
    answer.innerHTML = result
    if (result < 0) {
        answer.style.color = 'red'
    }
       else if (result >= 0) {
            answer.style.color = 'black'
        
    }
 }



plus.addEventListener('click', plusFunction)
minus.addEventListener('click', minusFunction)


