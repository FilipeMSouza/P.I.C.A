import {TipoBorda} from './filtro-smoothing';

export default class Mascara {
    valuesMatrix: number[][];
    values: number[];
    tamVizinhanca: number
    div: number;

    solucaoBorda: TipoBorda;

    constructor(valuesMatrix: number[][], solucaoBorda: TipoBorda) {
        this.valuesMatrix = valuesMatrix
        this.tamVizinhanca = this.valuesMatrix[0].length
        this.values = valuesMatrix.flat()
        this.div = this.values.reduce((a: number, b: number) => a + b)

        this.solucaoBorda = solucaoBorda;
    }
}