import express, { NextFunction } from "express";
import { nextTick } from "process";

import {
  multiplyTwoImages,
  sumTwoImages,
} from "../src/modules/image-processing";

const PORT: number = 8048;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/sumImages/:image1&:image2", (req: any, res) => {
  let imagePath1: string = req.params["image1"];
  let imagePath2: string = req.params["image2"];

  return sumTwoImages(imagePath1, imagePath2).then((value) =>
    res.status(200).json({ data: value })
  );
});

app.get("/multiplyImages/:image1&:image2", (req: any, res) => {
  let imagePath1: string = req.params["image1"];
  let imagePath2: string = req.params["image2"];

  return multiplyTwoImages(imagePath1, imagePath2).then((value) =>
    res.status(200).json({ data: value })
  );
});

app.listen(PORT, () => {
  console.log(`ඞ Server iniciado na porta ${PORT} ඞ`);
});
