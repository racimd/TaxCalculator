let x = document.getElementsByClassName('event-button')

let y = document.getElementById("vente")

let z = document.getElementById("gains")

let w = document.getElementById("taxe")


var form = document.getElementById("myform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

x[0].addEventListener("click",function(){
	z.value = y.value * 0.95
	w.value = y.value * 0.05



	
})
	
