import { Image } from "image-js";

let sumTwoImages = async (
  image1Base64: Promise<string>,
  image2Base64: Promise<string>
): Promise<string> => {
  let firstImageData = await image1Base64.then(
    async (data) => await Image.load(data).then((image) => image.grey().data)
  );
  let secondImageData = await image2Base64.then(
    async (data) => await Image.load(data).then((image) => image.grey().data)
  );

  let newImageData = [];

  for (let i = 0; i <= firstImageData.length - 1; i++) {
    newImageData.push((firstImageData[i] + secondImageData[i]) as number);
  }

  let newImage = new Image({
    width: Math.sqrt(firstImageData.length),
    height: Math.sqrt(firstImageData.length),
    data: newImageData.map((value: number): number => Math.floor(value / 2)),
    kind: "GREY",
  });

  return newImage.toDataURL();
};
