document.addEventListener('DOMContentLoaded',() =>{
    
	const prueba_math_E = document.getElementById('prueba_math_E')
	const prueba_math_ln2 = document.getElementById('prueba_math_ln2')
	const prueba_math_ln10 = document.getElementById('prueba_math_ln10')
	const prueba_math_LOG2E = document.getElementById('prueba_math_LOG2E')
	const prueba_math_LOG10E = document.getElementById('prueba_math_LOG10E')
	const prueba_math_PI = document.getElementById('prueba_math_PI')
	const prueba_math_SQRT1_2 = document.getElementById('prueba_math_SQRT1_2')
	const prueba_math_SQRT2 = document.getElementById('prueba_math_SQRT2')

	document.getElementById('btn_math_e').addEventListener('click', () => {prueba_math_E.innerHTML = Math.E;});

	document.getElementById('btn_math_ln2').addEventListener('click', () => {prueba_math_ln2.innerHTML = Math.LN2;});


	document.getElementById('btn_math_ln10').addEventListener('click', () => {prueba_math_ln10.innerHTML = Math.LN10;});
	
	document.getElementById('btn_math_LOG2E').addEventListener('click', () => {prueba_math_LOG2E.innerHTML = Math.LOG2E;});


	document.getElementById('btn_math_LOG10E').addEventListener('click', () => {prueba_math_LOG10E.innerHTML = Math.LOG10E;});


	document.getElementById('btn_math_PI').addEventListener('click', () => {prueba_math_PI.innerHTML = Math.PI;});


	document.getElementById('btn_math_SQRT1_2').addEventListener('click', () => {prueba_math_SQRT1_2.innerHTML = Math.SQRT1_2;});


	document.getElementById('btn_math_SQRT2').addEventListener('click', () => {prueba_math_SQRT2.innerHTML = Math.SQRT2;});











	const input_math_abs = document.getElementById('input_math_abs');
	const prueba_math_abs = document.getElementById('prueba_math_abs')
	document.getElementById('btn_math_abs').addEventListener('click', () => {
		let numero = input_math_abs.value;
		prueba_math_abs.innerHTML = Math.abs(numero);

	});



	const input_math_ceil = document.getElementById('input_math_ceil');
	const prueba_math_ceil = document.getElementById('prueba_math_ceil')
	document.getElementById('btn_math_ceil').addEventListener('click', () => {
		let numero = input_math_ceil.value;
		prueba_math_ceil.innerHTML = Math.ceil(numero);

	});



	const input_math_floor = document.getElementById('input_math_floor');
	const prueba_math_floor = document.getElementById('prueba_math_floor')
	document.getElementById('btn_math_floor').addEventListener('click', () => {
		let numero = input_math_floor.value;
		prueba_math_floor.innerHTML = Math.floor(numero);

	});


	const input_math_exp = document.getElementById('input_math_exp');
	const prueba_math_exp = document.getElementById('prueba_math_exp')
	document.getElementById('btn_math_exp').addEventListener('click', () => {
		let numero = input_math_exp.value;
		prueba_math_exp.innerHTML = Math.exp(numero);

	});



	const input_math_log = document.getElementById('input_math_log');
	const prueba_math_log = document.getElementById('prueba_math_log')
	document.getElementById('btn_math_log').addEventListener('click', () => {
		let numero = input_math_log.value;
		prueba_math_log.innerHTML = Math.log(numero);

	});


	const input_math_max = document.getElementById('input_math_max');
	const input_math_max2 = document.getElementById('input_math_max2');
	const input_math_max3 = document.getElementById('input_math_max3');
	const prueba_math_max = document.getElementById('prueba_math_max')
	document.getElementById('btn_math_max').addEventListener('click', () => {
		let numero = input_math_max.value;
		let numero2 = input_math_max2.value;
		let numero3 = input_math_max3.value;
		prueba_math_max.innerHTML = Math.max(numero, numero2, numero3);

	});




	const input_math_min = document.getElementById('input_math_min');
	const input_math_min2 = document.getElementById('input_math_min2');
	const input_math_min3 = document.getElementById('input_math_min3');
	const prueba_math_min = document.getElementById('prueba_math_min')
	document.getElementById('btn_math_min').addEventListener('click', () => {
		let numero = input_math_min.value;
		let numero2 = input_math_min2.value;
		let numero3 = input_math_min3.value;
		prueba_math_min.innerHTML = Math.min(numero, numero2, numero3);

	});




	const input_math_max_apply = document.getElementById('input_math_max.apply');
	const input_math_max_apply2 = document.getElementById('input_math_max.apply2');
	const input_math_max_apply3 = document.getElementById('input_math_max.apply3');
	const prueba_math_max_apply = document.getElementById('prueba_math_max.apply')
	document.getElementById('btn_math_max.apply').addEventListener('click', () => {
		
		let numero = input_math_max_apply.value;
		let numero2 = input_math_max_apply2.value;
		let numero3 = input_math_max_apply3.value;
		var numeros = new Array(numero,numero2,numero3)
		prueba_math_max_apply.innerHTML = Math.max.apply(null,numeros);

	});




	const input_math_min_apply = document.getElementById('input_math_min.apply');
	const input_math_min_apply2 = document.getElementById('input_math_min.apply2');
	const input_math_min_apply3 = document.getElementById('input_math_min.apply3');
	const prueba_math_min_apply = document.getElementById('prueba_math_min.apply')
	document.getElementById('btn_math_min.apply').addEventListener('click', () => {
		
		let numero = input_math_min_apply.value;
		let numero2 = input_math_min_apply2.value;
		let numero3 = input_math_min_apply3.value;
		var numeros = new Array(numero,numero2,numero3)
		prueba_math_min_apply.innerHTML = Math.min.apply(null,numeros);

	});




	const input_math_pow = document.getElementById('input_math_pow');
	const input_math_pow2 = document.getElementById('input_math_pow2');
	const prueba_math_pow = document.getElementById('prueba_math_pow')
	document.getElementById('btn_math_pow').addEventListener('click', () => {
		let numero = input_math_pow.value;
		let numero2 = input_math_pow2.value; 
		prueba_math_pow.innerHTML = Math.pow(numero, numero2);

	});



	const input_math_random = document.getElementById('input_math_random');
	const input_math_random2 = document.getElementById('input_math_random2');
	const prueba_math_random = document.getElementById('prueba_math_random')
	document.getElementById('btn_math_random').addEventListener('click', () => {
		let numero = input_math_random.value;
		let numero2 = input_math_random2.value; 
		prueba_math_random.innerHTML = Math.floor((Math.random() * (numero - numero2)) + numero2);

	});



	const input_math_round = document.getElementById('input_math_round');
	const prueba_math_round = document.getElementById('prueba_math_round')
	document.getElementById('btn_math_round').addEventListener('click', () => {
		let numero = input_math_round.value;
		prueba_math_round.innerHTML = Math.round(numero);

	});




	const input_math_sqrt = document.getElementById('input_math_sqrt');
	const prueba_math_sqrt = document.getElementById('prueba_math_sqrt')
	document.getElementById('btn_math_sqrt').addEventListener('click', () => {
		let numero = input_math_sqrt.value;
		prueba_math_sqrt.innerHTML = Math.sqrt(numero);

	});

});





