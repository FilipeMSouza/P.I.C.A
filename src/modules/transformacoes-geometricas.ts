import { Image } from "image-js";
import { resizeImg, normalizeImageData, readImageAsBase64 } from "./utils";
const math = require("mathjs");

enum ImageKind {
  BINARY = "BINARY",
  GREY = "GREY",
  GREYA = "GREYA",
  RGB = "RGB",
  RGBA = "RGBA",
  CMYK = "CMYK",
  CMYKA = "CMYKA",
}

const MATRIX_REFLECTION = [
  [1, 0, 0],
  [0, -1, 0],
  [0, 0, 1],
];

const getTranslationMatrix = (Tx: number, Ty: number): Array<Array<number>> => [
  [1, 0, Tx],
  [0, 1, Ty],
  [0, 0, 1],
];

export let translacao = async (
  imageBase64: string,
  xOffset: number = 0,
  yOffset: number = 0
): Promise<string> => {
  let imageData = resizeImg(await Image.load(imageBase64)).data;

  let oldImage: Image = new Image({
    width: Math.sqrt(imageData.length) / 2,
    height: Math.sqrt(imageData.length) / 2,
    data: imageData,
    kind: ImageKind.RGBA,
  });

  let newImage: Image = new Image({
    width: Math.sqrt(imageData.length) / 2,
    height: Math.sqrt(imageData.length) / 2,
    kind: ImageKind.RGBA,
  });

  let translationMatrix: Array<Array<number>> = getTranslationMatrix(
    xOffset,
    yOffset
  );

  for (let i = 0; i <= newImage.width - 1; i++) {
    for (let j = 0; j <= newImage.height - 1; j++) {
      let matrixCalc = math.multiply(translationMatrix, [i, j, 1]);
      newImage.setPixelXY(
        matrixCalc[0],
        matrixCalc[1],
        oldImage.getPixelXY(i, j)
      );
    }
  }
  return newImage.toBase64();
};

export let reflexao = async (imageBase64: string) => {
  let imageData = resizeImg(await Image.load(imageBase64)).data;

  let oldImage: Image = new Image({
    width: Math.sqrt(imageData.length) / 2,
    height: Math.sqrt(imageData.length) / 2,
    data: imageData,
    kind: ImageKind.RGBA,
  });

  let newImage: Image = new Image({
    width: Math.sqrt(imageData.length) / 2,
    height: Math.sqrt(imageData.length) / 2,
    kind: ImageKind.RGBA,
  });

  for (let i = 0; i <= newImage.width - 1; i++) {
    for (let j = 0; j <= newImage.height - 1; j++) {
      let matrixCalc = math.multiply(MATRIX_REFLECTION, [i, j, 1]);
      newImage.setPixelXY(
        i,
        j,
        oldImage.getPixelXY(i, newImage.height - 1 + matrixCalc[1])
      );
    }
  }
  return newImage.toBase64()
};
