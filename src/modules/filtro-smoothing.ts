import { Image } from "image-js";
import Mascara from "./Mascara";
import {resizeImg, getMatrixFromImage } from "./utils";

enum ImageKind {
  BINARY = "BINARY",
  GREY = "GREY",
  GREYA = "GREYA",
  RGB = "RGB",
  RGBA = "RGBA",
  CMYK = "CMYK",
  CMYKA = "CMYKA",
}

export enum TipoBorda {
  PaddingComZeros,
  ConvolucaoPeriodica,
  ReplicacaoDosPixelsDasBordas,
  ZeroAosResultadosNaoCalculaveis,
}

const bordaPaddingComZeros = (
  imageRef: Image,
  mascara: Mascara,
  oImageMatrix: number[][]
) => {
  const [start, end] = mascara.tamVizinhanca === 3 ? [-1, 1] : [-2, 2];

  for (let x = 0; x < imageRef.width; x++) {
    for (let y = 0; y < imageRef.height; y++) {
      let pixelList: any[] = [];

      for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
          try {
            let result = oImageMatrix[x + i][y + j];

            if (result === undefined) {
              throw TypeError;
            }

            pixelList.push(result);
          } catch (error) {
            if ((error as Error).name === "TypeError") {
              pixelList.push(0);
              continue;
            }
          }
        }
      }

      pixelList = pixelList.includes(undefined)
        ? pixelList.map((values: number) => (values === undefined ? 0 : values))
        : pixelList;

      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [Math.round(newPixelValue / mascara.div)]);
    }
  }
};

const bordaReplicacaoDosPixelsDasBordas = (
  imageRef: Image,
  oImageRef: Image,
  mascara: Mascara,
  oImageMatrix: number[][]
) => {
  const [start, end] = mascara.tamVizinhanca === 3 ? [-1, 1] : [-2, 2];

  for (let x = 0; x < imageRef.height; x++) {
    for (let y = 0; y < imageRef.width; y++) {
      let pixelList: any[] = [];

      try {
        for (let i = start; i <= end; i++) {
          for (let j = start; j <= end; j++) {
            let result = oImageMatrix[x + i][y + j];

            if (result === undefined) {
              throw TypeError;
            }

            pixelList.push(result);
          }
        }
      } catch (error) {
        if ((error as Error).name === "TypeError") {
          imageRef.setPixelXY(y, x, oImageRef.getPixelXY(y, x));
          continue;
        }
      }
      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [Math.round(newPixelValue / mascara.div)]);
    }
  }
};

const bordaZeroAosResultadosNaoCalculaveis = (
  imageRef: Image,
  mascara: Mascara,
  oImageMatrix: number[][]
) => {
  const [start, end] = mascara.tamVizinhanca === 3 ? [-1, 1] : [-2, 2];

  for (let x = 0; x < imageRef.width; x++) {
    for (let y = 0; y < imageRef.height; y++) {
      let pixelList: Array<any> = [];

      try {
        for (let i = start; i <= end; i++) {
          for (let j = start; j <= end; j++) {
            let result = oImageMatrix[x + i][y + j];

            if (result === undefined) {
              throw TypeError;
            }

            pixelList.push(result);
          }
        }
      } catch (error) {
        if ((error as Error).name === "TypeError") {
          imageRef.setPixelXY(y, x, [0]);
          continue;
        }
      }

      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * mascara.values[idx],
        0
      );

      imageRef.setPixelXY(y, x, [Math.round(newPixelValue / mascara.div)]);
    }
  }
};

const bordaConvolucaoPeriodica = (
  imageRef: Image,
  mascara: Mascara,
  oImageMatrix: number[][]
) => {
  const [start, end] = mascara.tamVizinhanca === 3 ? [-1, 1] : [-2, 2];

  for (let x = 0; x < imageRef.width; x++) {
    for (let y = 0; y < imageRef.height; y++) {
      let pixelList = [];

      for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
          try {
            let result = oImageMatrix[x + i][y + j];

            if (result === undefined) {
              //checa diagonal
              if (i < 0 && j < 0) {
                pixelList.push(
                  oImageMatrix[oImageMatrix.length + i][oImageMatrix.length + j]
                );
              } else if (i >= 0) {
                pixelList.push(
                  oImageMatrix[i][
                    (oImageMatrix.length + j) % oImageMatrix.length
                  ]
                );
              } else if (j >= 0) {
                pixelList.push(
                  oImageMatrix[(oImageMatrix.length + i) % oImageMatrix.length][
                    j
                  ]
                );
              }
            } else {
              pixelList.push(result);
            }
          } catch (error) {
            if ((error as Error).name === "TypeError") {
              if (i < 0 && j < 0) {
                pixelList.push(
                  oImageMatrix[oImageMatrix.length + i][oImageMatrix.length + j]
                );
              } else if (i >= 0) {
                pixelList.push(
                  oImageMatrix[i][
                    (oImageMatrix.length + j) % oImageMatrix.length
                  ]
                );
              } else if (j >= 0) {
                pixelList.push(
                  oImageMatrix[(oImageMatrix.length + i) % oImageMatrix.length][
                    j
                  ]
                );
              }
            }
            continue;
          }
        }
      }
      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [Math.round(newPixelValue / mascara.div)]);
    }
  }
};

export const aplicarFiltroSmoothing = async (
  imageBase64: string,
  mascara: Mascara
) => {
  let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();

  let newImage: Image = new Image({
    width: oImage.width,
    height: oImage.height,
    kind: ImageKind.GREY,
  });

  let oImageMatrix: number[][] = getMatrixFromImage(oImage);

  switch (mascara.solucaoBorda) {
    case TipoBorda.PaddingComZeros:
      bordaPaddingComZeros(newImage, mascara, oImageMatrix);
      break;
    case TipoBorda.ReplicacaoDosPixelsDasBordas:
      bordaReplicacaoDosPixelsDasBordas(
        newImage,
        oImage,
        mascara,
        oImageMatrix
      );
      break;
    case TipoBorda.ZeroAosResultadosNaoCalculaveis:
      bordaZeroAosResultadosNaoCalculaveis(newImage, mascara, oImageMatrix);
      break;
    default:
      bordaConvolucaoPeriodica(newImage, mascara, oImageMatrix);
  }

  return newImage.toDataURL();
};

console.log(1 as TipoBorda)