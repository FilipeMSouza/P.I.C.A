import express, { NextFunction } from "express";
import { nextTick } from "process";

import {
    multiplyTwoImages,
    sumTwoImages,
    divTwoImages,
    subTwoImages
} from "../src/modules/operacoes-aritmeticas";

const PORT: number = 8048;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/sum/:image1&:image2", (req: any, res) => {
  let imagePath1: string = req.params["image1"];
  let imagePath2: string = req.params["image2"];

  return sumTwoImages(imagePath1, imagePath2).then((value) =>
    res.status(200).json({ data: value })
  );
});

app.get("/multiply/:image1&:image2", (req: any, res) => {
  let imagePath1: string = req.params["image1"];
  let imagePath2: string = req.params["image2"];

  return multiplyTwoImages(imagePath1, imagePath2).then((value) =>
    res.status(200).json({ data: value })
  );
});


app.get("/subtract/:image1&:image2", (req: any, res) => {
    let imagePath1: string = req.params["image1"];
    let imagePath2: string = req.params["image2"];

    return subTwoImages(imagePath1, imagePath2).then((value) =>
        res.status(200).json({ data: value })
    );
});


app.get("/divide/:image1&:image2", (req: any, res) => {
    let imagePath1: string = req.params["image1"];
    let imagePath2: string = req.params["image2"];

    return divTwoImages(imagePath1, imagePath2).then((value) =>
        res.status(200).json({ data: value })
    );
});


app.listen(PORT, () => {
  console.log(`ඞ Server iniciado na porta ${PORT} ඞ`);
});


// TODO: Todas as rotas são iguais, fazer uma rota que recebe a operação como parâmetro!!!