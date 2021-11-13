import { PathLike, promises as fs } from "fs";
import {Image} from "image-js";

export let readImageAsBase64 = async (path: string):Promise<string> => {

  return `data:${"image/" + path.split(".").at(-1)};base64,${await fs
    .readFile(path as PathLike, "base64")
    .then((value: string): string => value)}`;
};

export let resizeImg = (image: Image) : Image => image.resize({width: 512, height: 512}) 
