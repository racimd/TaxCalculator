let x = document.getElementsByClassName('event-button')

let y = document.getElementById("achat")

let z = document.getElementById("vente2")

let w = document.getElementById("benef")


var form = document.getElementById("myform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

x[0].addEventListener("click",function(){
	w.value = (z.value*0.95) - y.value
	
})
	
