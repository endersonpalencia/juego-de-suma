let num1,num2;

let resultado;

let indiceOpCorrecta;


txt_suma = document.getElementById('suma');
op1 = document.getElementById('op1');
op2 = document.getElementById('op2');
op3 = document.getElementById('op3');
txt_msje = document.getElementById('msje');
txt_resultado = document.getElementById('resultado');


function comenzar() { 
	txt_resultado.innerHTML = '?';
	txt_msje.innerHTML  = '';
	
	num1 = Math.round(Math.random()*9)
	num2 = Math.round(Math.random()*9)
	resultado = num1 + num2;

	txt_suma.innerHTML = num1 + " + " + num2 + " = ";

	indiceOpCorrecta = Math.round(Math.random()*2)
	if (indiceOpCorrecta == 0) {
		op1.innerHTML = resultado;

		op2.innerHTML = resultado + 1;
		op3.innerHTML = resultado - 1;
	}

	if (indiceOpCorrecta == 1) {
		op2.innerHTML = resultado;

		op1.innerHTML = resultado + 2;
		op3.innerHTML = resultado - 1; 
	}

	if (indiceOpCorrecta == 2) {
		op3.innerHTML = resultado;

		op1.innerHTML = resultado + 1;
		op2.innerHTML = resultado - 1;
	}
} 

function controlarRespuestas(opcionElegida) {
	txt_resultado.innerHTML = opcionElegida.innerHTML;

	if (resultado == opcionElegida.innerHTML) {
		txt_msje.innerHTML = "EΧELENTE!!! "
		txt_msje.style.color = "blue";
		setTimeout(comenzar,2000)
	} 	

	 else {
		txt_msje.innerHTML = "Intente de nuevo "
		txt_msje.style.color = "red";
		setTimeout(limpiar,2000)

	}

	function limpiar() {
		txt_resultado.innerHTML = '?';
		txt_msje.innerHTML  = '';
	}

}


 
comenzar();


 
