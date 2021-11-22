import express, { NextFunction } from "express";
import { nextTick } from "process";

import {
  multiplyTwoImages,
  sumTwoImages,
  divTwoImages,
  subTwoImages,
} from "../src/modules/operacoes-aritmeticas";

import {reflexao, translacao, escala} from "../src/modules/transformacoes-geometricas"

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
  let imagePath: string = req.params['image']
  const value = await reflexao(imagePath);
  return res.status(200).json({ data: value });
});

app.get("/escala/:image&:Sx&:Sy", (req: any, res) => {
  let imagePath: string = req.params["image"];
  let Sx: number = req.params["Sx"];
  let Sy: number = req.params["Sy"];

  return escala(imagePath, Sx, Sy).then(value => res.status(200).json({data: value}))
});

app.get("/translacao/:image&:xOff&:yOff",async (req: any, res) => {
  let imagePath: string =req.params['image']
  let xOffset: number = req.params['xOff']
  let yOffset: number = req.params['yOff']

  const value = await translacao(imagePath, xOffset,yOffset)
  return res.status(200).json({data: value})
});

app.listen(PORT, () => {
  console.log(`ඞ Server iniciado na porta ${PORT} ඞ`);
});

// TODO: Todas as rotas são iguais, fazer uma rota que recebe a operação como parâmetro!!!
