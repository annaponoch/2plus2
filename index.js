let input1 = document.createElement('input')

let input2 = document.createElement('input')

let button = document.createElement('button')
button.textContent = 'Розрахувати'


let error1 = document.createElement('div')
	error1.classList.add('error-message')
	error1.textContent = "це не число"
let error2 = document.createElement('div')
	error2.classList.add('error-message')
	error2.textContent = "це не число"

input1.style.display = input2.style.display = button.style.display = 'block';

input1 = document.body.appendChild(input1)
input2 = document.body.appendChild(input2)
button = document.body.appendChild(button)

let res = document.createElement('div')
res.id = 'result'

button.addEventListener('click', function(e) {

if(!isDec(input1.value)){
document.body.insertBefore(error1, input2)
} else { error1.remove() }

if(!isDec(input2.value)){
document.body.insertBefore(error2, button)
} else { error2.remove() }

if(isDec(input1.value) && isDec(input2.value)){
res.textContent = +input1.value + +input2.value
if(res.parentNode != document.body) document.body.appendChild(res)
		}

})


function isDec(num) {
	if(isFinite(num) && /^\d*\.?\d*$/.test(num.toString())) return true;
	return false;
}