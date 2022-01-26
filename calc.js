class Calc{
	constructor(){
		this.tipeando = "";
		this.valores = [];
		this.op = [];
		this.cont = 0;
	}

	pressNumbrer(num){
		this.tipeando += num;
	}

	pressSuma(){
		this.valores[this.cont] = this.tipeando;
		this.op[this.cont] = "suma";
		this.cont +=1
	}
	pressResta(){
		this.valores[this.cont] = this.tipeando;
		this.op[this.cont] = "resta";
		this.cont +=1
	}
	pressDiv(){
		this.valores[this.cont] = this.tipeando;
		this.op[this.cont] = "div";
		this.cont +=1
	}
	pressProd(){
		this.valores[this.cont] = this.tipeando;
		this.op[this.cont] = "prod";
		this.cont +=1
	}

	pressAtras(){
		this.tipeando = substring(0, this.tipeando.lenght-1)
	}

	pressBorrar(){
		this.tipeando = "";
		this.cont = 0;
		this.valores= [];
		this.op = []
	}

	pressIgual(){
		for (let valor in this.op){
			switch (this.op[valor]){
				case "suma":
					this.valores[valor+1] = this.valores[valor] + this.valores[valor +1]
					break;
				case "resta":
					this.valores[valor+1] = this.valores[valor] - this.valores[valor +1];
					break;
				case "div":
					this.valores[valor+1] = this.valores[valor] / this.valores[valor +1];
					break;
				case "prod":
					this.valores[valor+1] = this.valores[valor] * this.valores[valor +1];
					break;
			}
		}
		let resultado = this.valores.pop();
		this.valores = [];
		this.op = [];
		this.cont = 0;
		return resultado;
	}
}


/* COMIENZO A EDITAR EL DOM */

const numeros = document.querySelectorAll(".input-numero");
const btnIgual = document.querySelector(".input-igual");
const btnOp = document.querySelectorAll(".input-prod");
// const btnDiv = document.querySelector(".divid");
// const btnSuma = document.querySelector(".suma");
// const btnResta = document.querySelector(".resta");

const calc = new Calc();



 for (let i of numeros){
 	i.addEventListener("click", valorPulsado(i.value))
}

function valorPulsado(n){
	calc.pressNumbrer(n);
	let valor = calc.tipeando;
	console.log(valor)
}