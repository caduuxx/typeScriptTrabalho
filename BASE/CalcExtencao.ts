import { Calculadora } from "./Calculador";

type Operation= "+"|"-"|"x"|"/";

export class CalcExtencao implements Calculadora{
    private value: number;

    constructor(){
        this.value = 0;
    }
    // esse metodo faz a logica dos simbulos da canculadora funcionar 
    private calcLogica(first:number, operation:Operation, last:number):number{
        switch (operation) {
            case "+":
                return this.somar(first,last);
            case "-":
                return this.subtrair(first,last);
            case "x":
                return this.mutiplicar(first,last);
            case "/":
                return this.dividir(first,last);
                break;
            default:
                break;
        }
        return 0;
    }
    //2
    public calculadora(first:number, operation:Operation, last:number){
       let result = this.calcLogica(first, operation, last);
       this.value=result;
    }

    //
    somar(first: number, last: number): number {
       return first + last;
    }
    subtrair(first: number, last: number): number {
        return first - last;
    }
    mutiplicar(first: number, last: number): number {
        return first * last;
    }
    dividir(first: number, last: number): number {
        return first / last;
    }
    showValue(): void {
        //retornar valor
        console.log(this.value);
    }
}