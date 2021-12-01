import { Image } from "image-js";
import Mascara from "./Mascara";
import { readImageAsBase64, resizeImg, getMatrixFromImage } from "./utils";

enum ImageKind {
  BINARY = "BINARY",
  GREY = "GREY",
  GREYA = "GREYA",
  RGB = "RGB",
  RGBA = "RGBA",
  CMYK = "CMYK",
  CMYKA = "CMYKA",
}

enum TipoBorda {
  PaddingComZeros,
  ConvolucaoPeriodica,
  ReplicacaoDosPixelsDasBordas,
  ZeroAosResultadosNaoCalculaveis,
}

export interface SmoothingOptions {
  tamanhoVizinhanca: 5 | 3;
  mascara: Mascara;
  solucaoBorda: TipoBorda;
}

// TODO: Mudar Mascara para uma classe!!!!

/* 
    Implementar filtro com efeito de smoothing na imagem.

    #### Coisas a serem feitas :
    - [✅] Utilizar filtro da média
    - [ ] Utilizar 2 tamanhos distintos de vizinhança
    - [✅] Utilizar 2 variações de máscaras
    - [✅] Utilizar soluções de borda do tipo:
        - [✅] Replicação dos pixels das bordas
        - [✅] Atribuindo zero aos resultados não calculáveis
        - [✅] Padding com zeros
        - [✅] Convolução periódica 


    
*/

const SIMPLE_MASK: Mascara = new Mascara([1, 1, 1, 1, 1, 1, 1, 1, 1]);
const bordaPaddingComZeros = (imageRef: Image, options: SmoothingOptions, oImageMatrix: number[][]) => {
  for (let x = 0; x < imageRef.width; x++) {
    for (let y = 0; y < imageRef.height; y++) {
      let pixelList: any[] = [];

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          try {
            let result = oImageMatrix[x + i][y + j];
            pixelList.push(result);
          } catch (error) {
            if ((error as Error).name === "TypeError") {
              pixelList.push(0)
              continue
            }
          }
        }
      }
      pixelList = pixelList.includes(undefined) ? pixelList.map((values: number) => values === undefined ? 0 : values) : pixelList

      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * options.mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [
        Math.round(newPixelValue / options.mascara.div),
      ]);
    }
  }
}

const bordaReplicacaoDosPixelsDasBordas = (imageRef: Image, oImageRef: Image, options: SmoothingOptions, oImageMatrix: number[][]) => {
  for (let x = 0; x < imageRef.height; x++) {
    for (let y = 0; y < imageRef.width; y++) {
      let pixelList: any[] = [];
      try {
        pixelList = [
          oImageMatrix[x - 1][y - 1],
          oImageMatrix[x - 1][y],
          oImageMatrix[x - 1][y + 1],
          oImageMatrix[x][y - 1],
          oImageMatrix[x][y],
          oImageMatrix[x][y + 1],
          oImageMatrix[x + 1][y - 1],
          oImageMatrix[x + 1][y],
          oImageMatrix[x + 1][y + 1],
        ];

        if (pixelList.includes(undefined)) {
          throw TypeError;
        }
      } catch (error) {
        if ((error as Error).name === "TypeError") {
          imageRef.setPixelXY(y, x, oImageRef.getPixelXY(y, x));
          continue;
        }
      }
      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * options.mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [
        Math.round(newPixelValue / options!.mascara.div),
      ]);
    }
  }
}

const bordaZeroAosResultadosNaoCalculaveis = (imageRef: Image, options: SmoothingOptions, oImageMatrix: number[][]) => {
  for (let x = 0; x < imageRef.width; x++) {
    for (let y = 0; y < imageRef.height; y++) {
      let pixelList: Array<any> = [];
      try {
        pixelList = [
          oImageMatrix[x - 1][y - 1],
          oImageMatrix[x - 1][y],
          oImageMatrix[x - 1][y + 1],
          oImageMatrix[x][y - 1],
          oImageMatrix[x][y],
          oImageMatrix[x][y + 1],
          oImageMatrix[x + 1][y - 1],
          oImageMatrix[x + 1][y],
          oImageMatrix[x + 1][y + 1],
        ];

        if (pixelList.includes(undefined)) {
          throw TypeError;
        }
      } catch (error) {
        if ((error as Error).name === "TypeError") {
          imageRef.setPixelXY(y, x, [0]);
          continue;
        }
      }
      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * options!.mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [
        Math.round(newPixelValue / options!.mascara.div),
      ]);
    }
  }
}

const bordaConvolucaoPeriodica = (imageRef: Image, options: SmoothingOptions, oImageMatrix: number[][]) => {
  for (let x = 0; x < imageRef.width; x++) {
    for (let y = 0; y < imageRef.height; y++) {

      let pixelList = [];

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          try {
            let result = oImageMatrix[x + i][y + j];

            if (result === undefined) {

              //checa diagonal
              if (i < 0 && j < 0) {
                pixelList.push(oImageMatrix[oImageMatrix.length + i][oImageMatrix.length + j]);
              } else if (i >= 0) {
                pixelList.push(oImageMatrix[i][(oImageMatrix.length + j) % oImageMatrix.length]);
              } else if (j >= 0) {
                pixelList.push(oImageMatrix[(oImageMatrix.length + i) % oImageMatrix.length][j]);
              }
            } else {
              pixelList.push(result);
            }

          } catch (error) {
            if ((error as Error).name === "TypeError") {
              if ((i < 0 && j < 0) && i === j) {
                pixelList.push(oImageMatrix[oImageMatrix.length + i][oImageMatrix.length + j]);
              } else if (i >= 0) {
                pixelList.push(oImageMatrix[i][(oImageMatrix.length + j) % oImageMatrix.length]);
              } else {
                pixelList.push(oImageMatrix[(oImageMatrix.length + i) % oImageMatrix.length][j]);
              }
              continue
            }
          }
        }
      }

      let newPixelValue = pixelList.reduce(
        (result, pl, idx) => result + pl * options!.mascara.values[idx],
        0
      );
      imageRef.setPixelXY(y, x, [
        Math.round(newPixelValue / options!.mascara.div),
      ]);

    }
  }
}

export const aplicarFiltroSmoothing = async (
  imageBase64: string,
  options: SmoothingOptions
) => {
  let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();

  let newImage: Image = new Image({
    width: oImage.width,
    height: oImage.height,
    kind: ImageKind.GREY,
  });

  let oImageMatrix: number[][] = getMatrixFromImage(oImage);

  if (options!.tamanhoVizinhanca === 3) {
    switch (options!.solucaoBorda) {
      case TipoBorda.PaddingComZeros:
        bordaPaddingComZeros(newImage, options, oImageMatrix)
        break;
      case TipoBorda.ReplicacaoDosPixelsDasBordas:
        bordaReplicacaoDosPixelsDasBordas(newImage, oImage, options, oImageMatrix)
        break;
      case TipoBorda.ZeroAosResultadosNaoCalculaveis:
        bordaZeroAosResultadosNaoCalculaveis(newImage, options, oImageMatrix);
        break
      default:
        bordaConvolucaoPeriodica(newImage, options, oImageMatrix);
    }
  }

  return newImage.toDataURL();
};

readImageAsBase64("client/src/assets/placeholders/lena.jpeg").then((path) =>
  aplicarFiltroSmoothing(path, {
    mascara: SIMPLE_MASK,
    solucaoBorda: TipoBorda.ConvolucaoPeriodica,
    tamanhoVizinhanca: 3,
  }).then(b => Image.load(b).then(i => i.save('AAAA.png')))
);
