import { Image } from "image-js";
import { resizeImg, normalizeImageData } from "./utils";

enum ImageKind {
  BINARY = "BINARY",
  GREY = "GREY",
  GREYA = "GREYA",
  RGB = "RGB",
  RGBA = "RGBA",
  CMYK = "CMYK",
  CMYKA = "CMYKA",
}

export let sumTwoImages = async (image1Base64: string, image2Base64: string) => {
  let firstImageData = await Image.load(image1Base64).then(
    (image) => resizeImg(image).grey().data
  );
  let secondImageData = await Image.load(image2Base64).then(
    (image) => resizeImg(image).grey().data
  );
  let newImageData: number[] = new Array(firstImageData.length);

  for (let i in firstImageData) {
    newImageData[i] = (firstImageData[i] + secondImageData[i]) as number;
  }

  let newImage: Image = new Image({
    width: Math.sqrt(firstImageData.length),
    height: Math.sqrt(firstImageData.length),
    data: normalizeImageData(newImageData),
    kind: ImageKind.GREY,
  });

  return newImage.toDataURL();
};

export let multiplyTwoImages = async (image1Base64: string, image2Base64: string) => {
  let firstImageData = await Image.load(image1Base64).then(
    (image) => resizeImg(image).grey().data
  );
  let secondImageData = await Image.load(image2Base64).then(
    (image) => resizeImg(image).grey().data
  );
  let newImageData: number[] = new Array(firstImageData.length);

  for (let i in firstImageData) {
    newImageData[i] = (firstImageData[i] * secondImageData[i]) as number;
  }

  let newImage: Image = new Image({
    width: Math.sqrt(firstImageData.length),
    height: Math.sqrt(firstImageData.length),
    data: normalizeImageData(newImageData),
    kind: ImageKind.GREY,
  });

  return newImage.toDataURL();
};