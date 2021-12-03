import { PathLike, promises as fs } from "fs";
import { Image } from "image-js";

export enum ImageKind {
  BINARY = "BINARY",
  GREY = "GREY",
  GREYA = "GREYA",
  RGB = "RGB",
  RGBA = "RGBA",
  CMYK = "CMYK",
  CMYKA = "CMYKA",
}


export let readImageAsBase64 = async (path: string): Promise<string> => {
  return `data:${"image/" + path.split(".").at(-1)};base64,${await fs
    .readFile(path as PathLike, "base64")
    .then((value: string): string => value)}`;
};

export let resizeImg = (image: Image): Image =>
  image.resize({ width: 512, height: 512 });

export let getExtremesFromArray = (array: number[]): number[] => {
  let min: number = array[0];
  let max: number = array[0];

  for (let i of array) {
    min = Math.min(i, min);
    max = Math.max(i, max);
  }
  return [min, max];
};

export let normalizeImageData = (
  imagePixelsArray: Array<number>
): Array<number> => {
  let [min, max] = getExtremesFromArray(imagePixelsArray);

  for (let i in imagePixelsArray) {
    imagePixelsArray[i] = Math.round(
      (255 / (max - min)) * (imagePixelsArray[i] - min)
    );
  }
  return imagePixelsArray;
};

export let clamp = (num: number, limit: number): number => {
  return num > limit ? limit : num;
};

export const degreeToRadian = (degrees: number): number =>
  degrees * (Math.PI / 180);

export const getLookUpTable = (data: number[]): Object[] =>
  data.map(
    (value: number, idx: number) => new Object({ idx: idx, value: value })
  );

const chunk = <T>(array: T[], chunkSize: number): T[][] => {
  const R = [];
  for (let i = 0, len = array.length; i < len; i += chunkSize)
    R.push(array.slice(i, i + chunkSize));
  return R;
};


export const getMatrixFromImage = (image: Image): number[][] => {
  let array = new Array(image.size);
  let ptr = 0;
  for (let i = 0; i < image.data.length; i += image.channels) {
    let pixel;
    for (let j = 0; j < image.components; j++) {
      pixel = image.data[i + j];
    }
    array[ptr++] = pixel;
  }

  return chunk(array, image.height);
}
