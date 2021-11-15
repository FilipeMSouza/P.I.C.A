import { PathLike, promises as fs } from "fs";
import { Image } from "image-js";

export let readImageAsBase64 = async (path: string): Promise<string> => {
  return `data:${"image/" + path.split(".").at(-1)};base64,${await fs
    .readFile(path as PathLike, "base64")
    .then((value: string): string => value)}`;
};

export let resizeImg = (image: Image): Image =>
  image.resize({ width: 512, height: 512 });

let getExtremesFromArray = (array: Array<number>): Array<number> => {
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

  for(let i in imagePixelsArray){
    imagePixelsArray[i] =  Math.round(255 / (max - min) * (imagePixelsArray[i] - min))

  }
  return imagePixelsArray;
};