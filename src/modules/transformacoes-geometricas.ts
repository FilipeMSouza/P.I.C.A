import { Image } from "image-js";
import { resizeImg, clamp, readImageAsBase64, degreeToRadian } from "./utils";
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

const getScallingMatrix = (Sx: number, Sy: number): Array<Array<number>> => [
  [Sx, 0, 0],
  [0, Sy, 0],
  [0, 0, 1],
];

const getTranslationMatrix = (Tx: number, Ty: number): Array<Array<number>> => [
  [1, 0, Tx],
  [0, 1, Ty],
  [0, 0, 1],
];

const getRotationMatrix = (theta: number): Array<Array<number>> => [
  [Math.cos(theta), -Math.sin(theta), 0],
  [Math.sin(theta), Math.cos(theta), 0],
  [0, 0, 1],
];

export const translacao = async (
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
        clamp(Math.floor(matrixCalc[0]), newImage.width),
        clamp(Math.floor(matrixCalc[1]), newImage.width),
        oldImage.getPixelXY(i, j)
      );
    }
  }
  return newImage.toDataURL();
};

export const reflexao = async (imageBase64: string): Promise<string> => {
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
  return newImage.toDataURL();
};

// No momento,falta interplação, ISSO É UM TODO!!!!
export const escala = async (
  imageBase64: string | Promise<string>,
  fatorX: number = 1,
  fatorY: number = 1
) => {
  let imageData = resizeImg(await Image.load(await imageBase64)).grey().data;

  let oldImage: Image = new Image({
    width: Math.sqrt(imageData.length),
    height: Math.sqrt(imageData.length),
    kind: ImageKind.GREY,
    data: imageData,
  });

  let newImage: Image = new Image({
    width: Math.sqrt(imageData.length),
    height: Math.sqrt(imageData.length),
    kind: ImageKind.GREY,
  });

  for (let i = 0; i <= newImage.width - 1; i++) {
    for (let j = 0; j <= newImage.height - 1; j++) {
      let matrixCalc = math.multiply(getScallingMatrix(fatorX, fatorY), [
        i,
        j,
        1,
      ]);
      newImage.setPixelXY(
        clamp(Math.floor(matrixCalc[0]), newImage.width),
        clamp(Math.floor(matrixCalc[1]), newImage.height),
        oldImage.getPixelXY(i, j)
      );
    }
  }
  return newImage.toDataURL();
};

export const rotacao = async (
  imageBase64: string | Promise<string>,
  theta: number
) => {
  let imageData = resizeImg(await Image.load(await imageBase64)).grey().data;

  let oldImage: Image = new Image({
    width: Math.sqrt(imageData.length),
    height: Math.sqrt(imageData.length),
    kind: ImageKind.GREY,
    data: imageData,
  });

  let newImage: Image = new Image({
    width: Math.sqrt(imageData.length),
    height: Math.sqrt(imageData.length),
    kind: ImageKind.GREY,
  });

  for (let i = 0; i <= newImage.width - 1; i++) {
    for (let j = 0; j <= newImage.height - 1; j++) {
      let matrixCalc: Array<number> = math.multiply(
        getRotationMatrix(degreeToRadian(theta)),
        [i, j, 1]
      );
      if (matrixCalc[0] < 0) {
        if (matrixCalc[1] < 0) {
          newImage.setPixelXY(
            newImage.width + Math.floor(matrixCalc[0]),
            newImage.width + Math.floor(matrixCalc[1]),
            oldImage.getPixelXY(i, j)
          );
        } else {
          newImage.setPixelXY(
            newImage.width + Math.floor(matrixCalc[0]),
            Math.floor(matrixCalc[1]),
            oldImage.getPixelXY(i, j)
          );
        }
      } else {
        if (matrixCalc[1] < 0) {
          newImage.setPixelXY(
            Math.floor(matrixCalc[0]),
            newImage.width + Math.floor(matrixCalc[1]),
            oldImage.getPixelXY(i, j)
          );
        } else {
          newImage.setPixelXY(
            Math.floor(matrixCalc[0]),
            Math.floor(matrixCalc[1]),
            oldImage.getPixelXY(i, j)
          );
        }
      }
    }
  }
  return newImage.toDataURL()
};

