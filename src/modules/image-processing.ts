import { Image } from "image-js";
import { resizeImg, readImageAsBase64, normalizeImageData } from "./utils";

let sumTwoImages = async (
  image1Base64: Promise<string>,
  image2Base64: Promise<string>
) => {
  let firstImageData = await image1Base64.then(
    async (data) =>
      await Image.load(data).then((image) => resizeImg(image).grey().data)
  );
  let secondImageData = await image2Base64.then(
    async (data) =>
      await Image.load(data).then((image) => resizeImg(image).grey().data)
  );

  let newImageData: number[] = new Array(firstImageData.length);

  for (let i in firstImageData) {
    newImageData[i] = (firstImageData[i] + secondImageData[i]) as number;
  }

  let newImage: Image = new Image({
    width: Math.sqrt(firstImageData.length),
    height: Math.sqrt(firstImageData.length),
    data: normalizeImageData(newImageData),
    kind: "GREY",
  });

  return newImage.toDataURL();
};
