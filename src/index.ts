import express, { NextFunction } from "express";

var mat3x3Simples = [[1,1,1],[1,1,1],[1,1,1]]
var mat3x3Comp= [[1,2,1],[2,4,2],[1,2,1]]
var mat5x5Simples = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]
var mat5x5Comp= [[1,2,3,2,1],[2,4,6,4,2],[4,8,12,8,4],[2,4,6,4,2],[1,2,3,2,1]]

import {
    multiplyTwoImages,
    sumTwoImages,
    divTwoImages,
    subTwoImages,
} from "../src/modules/operacoes-aritmeticas";

import {
    reflexao,
    translacao,
    escala,
    rotacao,
} from "../src/modules/transformacoes-geometricas";

import {
    histograma,
    histogramaEqualizado,
    histogramaNormalizado,
    equalizarImagem,
    contrastStretching,
} from "../src/modules/histograma";

import {
    aplicarFiltroSmoothing,
    TipoBorda,
} from "../src/modules/filtro-smoothing";

import {
    laplaciano,
    laplacianoDoGaussiano,
    unsharp_mask_highboost,
    detector_sobel,
    detector_roberts
} from "../src/modules/filtragem-espacial-laplaciana";

import Mascara from "./modules/Mascara";

const PORT: number = 8048;
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/sum/:image1&:image2", async (req: any, res) => {
    let imagePath1: string = req.params["image1"];
    let imagePath2: string = req.params["image2"];

    const value = await sumTwoImages(imagePath1, imagePath2);
    return res.status(200).json({ data: value });
});

app.get("/multiply/:image1&:image2", async (req: any, res) => {
    let imagePath1: string = req.params["image1"];
    let imagePath2: string = req.params["image2"];

    const value = await multiplyTwoImages(imagePath1, imagePath2);
    return res.status(200).json({ data: value });
});

app.get("/subtract/:image1&:image2", async (req: any, res) => {
    let imagePath1: string = req.params["image1"];
    let imagePath2: string = req.params["image2"];

    const value = await subTwoImages(imagePath1, imagePath2);
    return res.status(200).json({ data: value });
});

app.get("/divide/:image1&:image2", async (req: any, res) => {
    let imagePath1: string = req.params["image1"];
    let imagePath2: string = req.params["image2"];

    const value = await divTwoImages(imagePath1, imagePath2);
    return res.status(200).json({ data: value });
});

app.get("/reflexao/:image", async (req: any, res) => {
    let imagePath: string = req.params["image"];
    const value = await reflexao(imagePath);
    return res.status(200).json({ data: value });
});

app.get("/escala/:image&:Sx&:Sy", (req: any, res) => {
    let imagePath: string = req.params["image"];
    let Sx: number = req.params["Sx"];
    let Sy: number = req.params["Sy"];

    return escala(imagePath, Sx, Sy).then(value =>
        res.status(200).json({ data: value })
    );
});

app.get("/translacao/:image&:xOff&:yOff", async (req: any, res) => {
    let imagePath: string = req.params["image"];
    let xOffset: number = req.params["xOff"];
    let yOffset: number = req.params["yOff"];

    const value = await translacao(imagePath, xOffset, yOffset);
    return res.status(200).json({ data: value });
});

app.get("/rotacao/:image&:theta", async (req: any, res) => {
    let imagePath: string = req.params["image"];
    let theta: number = req.params["theta"];

    const value = await rotacao(imagePath, theta);
    return res.status(200).json({ data: value });
});

app.get("/histograma/:tipo&:imagePath", async (req: any, res) => {
    let tipo: string = req.params["tipo"];
    let imagePath: string = req.params["imagePath"];

    let data;

    switch (tipo) {
        case "Normalizado":
            data = await histogramaNormalizado(imagePath, true);
            break;
        case "Equalizado":
            data = await histogramaEqualizado(imagePath);
            break;
        default:
            data = await histograma(imagePath, true);
    }
    return res.status(200).json({ data: data });
});

app.get("/imagemEqualizada/:imagePath", async (req: any, res) => {
    let imagePath: string = req.params["imagePath"];

    const result = await equalizarImagem(imagePath);
    return res.status(200).json({ data: result });
});

app.get("/contrastStretching/:imagePath", async (req: any, res) => {
    let imagePath: string = req.params["imagePath"];

    const result = await contrastStretching(imagePath);
    return res.status(200).json({ data: result });
});

//--------------------

app.get("/smoothing/:imagePath&:mascara&:tipoBorda", async (req: any, res) => {
    let imagePath: string = req.params["imagePath"];
    let tipoBorda: TipoBorda = parseInt(req.params["tipoBorda"]);

    let n_matrix:number = parseInt(req.params["mascara"]);
    let mascAux: Mascara;
    switch (n_matrix) {
        case 1:
            mascAux = new Mascara(
                mat3x3Simples,tipoBorda
            );
            break;
        case 2:
            mascAux = new Mascara(
                mat3x3Comp,tipoBorda
            );
            break;
        case 3:
            mascAux = new Mascara(
                mat5x5Simples,tipoBorda
            );
            break;
        default:
            mascAux = new Mascara(
                mat5x5Comp,tipoBorda
            );
            break;

    }
    

    const result = await aplicarFiltroSmoothing(imagePath, mascAux);
    return res.status(200).json({ data: result });
});

//-------

app.get("/laplaciano/:imagePath&:filtro&:divByNine", async (req: any, res) => {
    let imagePath: string = req.params["imagePath"];
    let filtro: number[] = eval(req.params["filtro"]) as number[];
    let divideByNine: boolean = req.params["divByNine"];

    let result: string = await laplaciano(imagePath, filtro, divideByNine);

    return res.status(200).json({ data: result });
});

app.get("/LoG/:imagePath&:filtro", async (req: any, res) => {
    let imagePath: string = req.params["imagePath"];
    let filtro: boolean = req.params["filtro"];

    let result = await laplacianoDoGaussiano(imagePath, filtro);
    return res.status(200).json({
        data: result,
    });
});

app.get("/unsharp_mask_highboost/:imagePath&:k", async (req: any, res) => {
    let imagePath: string = req.params["imagePath"];
    let k: number = req.params["k"];

    let result = await unsharp_mask_highboost(imagePath, k);
    return res.status(200).json({ data: result });
});

app.get("/detectorSobel/:imagePath", async (req:any, res) =>{
  let imagePath: string = req.params['imagePath']

  let result = await detector_sobel(imagePath)

  return res.status(200).json({data: result})
})

app.get('/detectorRoberts/:imagePath', async (req:any, res) => {
  let imagePath:string = req.params['imagePath']

  let result = await detector_roberts(imagePath)

  return res.status(200).json({data: result})
})

app.listen(PORT, () => {
    console.log(`ඞ Server iniciado!!!ඞ`);
    console.log(`ඞ Acesse em: http://localhost:${PORT} ඞ`);
});
