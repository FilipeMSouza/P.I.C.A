import { writeFile } from "fs";
import { DataArray, Image } from "image-js";
import { readImageAsBase64, resizeImg, getLookUpTable } from "./utils";

enum ImageKind {
  BINARY = "BINARY",
  GREY = "GREY",
  GREYA = "GREYA",
  RGB = "RGB",
  RGBA = "RGBA",
  CMYK = "CMYK",
  CMYKA = "CMYKA",
}

const histogramaFromImage = (imageObject: Image): Object[] => {
  let histograma: number[] = Array(256).fill(0);
  let imageData = imageObject.data;

  for (let i in imageData) {
    histograma[imageData[i]]++;
  }

  return getLookUpTable(histograma);
};

export const histograma = async (
  imageBase64: string,
  returnAsListOfObjects: boolean = false
): Promise<number[] | Object[]> => {
  let oImage = resizeImg(await Image.load(imageBase64)).grey();
  let oImageData = oImage.data;

  // Só funciona com imagem grayscale, morram imagens RGB e RGBA
  let histograma: Array<number> = Array(256).fill(0);

  for (let i in oImageData) {
    histograma[oImageData[i]]++;
  }
  return !returnAsListOfObjects ? histograma : getLookUpTable(histograma);
};

export const histogramaNormalizado = async (
  imageBase64: string,
  returnAsListOfObjects: boolean = false
): Promise<number[] | Object[]> => {
  const oImage: Image = resizeImg(await Image.load(imageBase64)).grey();
  const histogramaNaoNormalizado: Array<number> = (await histograma(
    imageBase64
  )) as number[];
  const numberOfPixels: number = oImage.size;
  const histogramaNormalizado: Array<number> = Array(256).fill(0);

  for (let i in histogramaNormalizado) {
    histogramaNormalizado[i] = histogramaNaoNormalizado[i] / numberOfPixels;
  }
  return !returnAsListOfObjects
    ? histogramaNormalizado
    : getLookUpTable(histogramaNormalizado);
};

export const histogramaEqualizado = async (
  imageBase64: string,
  toImage: boolean = false
): Promise<number[] | any> => {
  let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();
  let histNormalizado: Array<number> = (await histogramaNormalizado(
    imageBase64
  )) as number[];

  let histogramaEqualizado: number[] = [];

  let count: number = 0;
  for (let i in histNormalizado) {
    count += histNormalizado.length * histNormalizado[i];
    histogramaEqualizado.push(count);
  }

  let valsTable: number[] = [];

  for (let i in histogramaEqualizado)
    valsTable.push(Math.min(Math.round(histogramaEqualizado[i]), 255));

  let lookUpTableObjects = Object.fromEntries(
    valsTable
      .map(
        (value: number, idx: number) => new Object({ idx: idx, value: value })
      )
      .map((x: any) => [x.idx, x.value])
  );

  return toImage ? lookUpTableObjects : getLookUpTable(valsTable);
};

export const equalizarImagem = async (imageBase64: string) => {
  let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();
  let newImage: Image = new Image({
    width: oImage.width,
    height: oImage.height,
    kind: ImageKind.GREY,
  });

  let hEqualizado = await histogramaEqualizado(imageBase64, true);

  for (let i = 0; i <= oImage.height; i++) {
    for (let j = 0; j <= oImage.width; j++) {
      newImage.setPixelXY(i, j, [hEqualizado[oImage.getPixelXY(i, j)[0]]]);
    }
  }
  return newImage.toDataURL();
};

export const contrastStretching = async (imageBase64: string) => {
  let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();
  let oImageData: DataArray = oImage.data;

  let newImage: Image = new Image({
    width: oImage.width,
    height: oImage.height,
    kind: ImageKind.GREY,
  });

  let minPixelVal: number = oImageData[0];
  let maxPixelVal: number = oImageData[0];

  for (let i in oImage.data) {
    minPixelVal = Math.min(oImage.data[i], minPixelVal);
    maxPixelVal = Math.max(oImage.data[i], maxPixelVal);
  }

  const calcularContraste = (valorPixel: number) =>
    ((valorPixel - minPixelVal) / (maxPixelVal - minPixelVal)) * 255;

  for (let i = 0; i <= newImage.height; i++) {
    for (let j = 0; j <= newImage.width; j++) {
      newImage.setPixelXY(i, j, [
        calcularContraste(oImage.getPixelXY(i, j)[0]),
      ]);
    }
  }
  return {
    histData: histogramaFromImage(newImage),
    imgData: newImage.toDataURL(),
  };
};
