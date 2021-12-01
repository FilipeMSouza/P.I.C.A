
export default class Mascara{
    values: number[];
    div: number;

    constructor(values: number[]){
        this.values = values
        this.div = this.values.reduce((a: number, b: number) => a + b)
    }

}