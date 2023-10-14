export interface Calculadora{
    somar(first: number, last:number) : number;
    subtrair(first: number, last:number) : number;
    mutiplicar(first: number, last:number) : number;
    dividir(first: number, last:number) : number;
    showValue(): void;
}