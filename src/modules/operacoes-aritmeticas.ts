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

export let sumTwoImages = async (
    image1Base64: string,
    image2Base64: string
) => {
    let firstImageData = resizeImg(await Image.load(image1Base64)).grey().data
    let secondImageData = resizeImg(await Image.load(image2Base64)).grey().data

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

export let multiplyTwoImages = async (
    image1Base64: string,
    image2Base64: string,
) => {
    let firstImageData = resizeImg(await Image.load(image1Base64)).grey().data
    let secondImageData = resizeImg(await Image.load(image2Base64)).grey().data

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

export let subTwoImages = async (
    image1Base64: string,
    image2Base64: string
) => {
    let firstImageData = resizeImg(await Image.load(image1Base64)).grey().data
    let secondImageData = resizeImg(await Image.load(image2Base64)).grey().data

    let newImageData: number[] = new Array(firstImageData.length);
    for (let i in firstImageData){
        newImageData[i] = (firstImageData[i] - secondImageData[i]) as number
    }

    let newImage: Image = new Image({
        width: Math.sqrt(firstImageData.length),
        height: Math.sqrt(firstImageData.length),
        data: normalizeImageData(newImageData),
        kind: ImageKind.GREY,
    })
    return newImage.toDataURL();
}

export let divTwoImages = async (
    image1Base64: string,
    image2Base64: string
) => {
    let firstImageData = resizeImg(await Image.load(image1Base64)).grey().data
    let secondImageData = resizeImg(await Image.load(image2Base64)).grey().data

    let newImageData: number[] = new Array(firstImageData.length);

    for (let i in firstImageData){
        if(firstImageData[i] === 0 || secondImageData[i] === 0){
            secondImageData[i] += 1;
            firstImageData[i] += 1;
        }
        newImageData[i] = (firstImageData[i] / secondImageData[i]) as number
    }

    let newImage: Image = new Image({
        width: Math.sqrt(firstImageData.length),
        height: Math.sqrt(firstImageData.length),
        data: normalizeImageData(newImageData),
        kind: ImageKind.GREY,
    })
    return newImage.toDataURL();
}

//TODO: Todas as funções são iguais, fazer função recebe operação como parâmetro!!