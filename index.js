let error1 = document.createElement('div')
let error2 = document.createElement('div')
let input1 = document.createElement('input')
let input2 = document.createElement('input')
let button = document.createElement('button')

input1 = document.body.appendChild(input1)
input2 = document.body.appendChild(input2)
button = document.body.appendChild(button)
button.textContent = 'Calculate'
//
document.body.insertBefore(error1, input2);
document.body.insertBefore(error2, button);
//

error1.textContent = 'this is not a number';
error1.style.display = 'none';
input1.id = '1';
input2.id = '2';
error2.textContent = 'this is not a number';
error2.style.display = 'none';
input1.style.display = input2.style.display = button.style.display = 'block';
let resultDiv = document.createElement('div');
let result = document.createElement('div')
result.id = 'result'


button.onclick = function() {
(error1.style.display = 'none'), (error2.style.display = 'none');
resultDiv.textContent = '';
if (!isFinite(input1.value)) {
error1.style.display = 'block';
 }
if (!isFinite(input2.value)) {
error2.style.display = 'block';
}; if(isFinite(input1.value) && isFinite(input2.value))  {
result = Number(input1.value) + Number(input2.value);
resultDiv.textContent = result;
 document.body.appendChild(resultDiv) }}
