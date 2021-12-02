import Image from "image-js";
import {
    readImageAsBase64,
    resizeImg,
    ImageKind,
    getMatrixFromImage,
} from "./utils";

class FiltrosLaplace {
    static FILTRO_LAPLACE_A = [0, 1, 0, 1, -4, 1, 0, 1, 0];
    static FILTRO_LAPLACE_B = [1, 1, 1, 1, -8, 1, 1, 1, 1];
    static FILTRO_LAPLACE_C = [0, -1, 0, -1, 4, -1, 0, -1, 0];
    static FILTRO_LAPLACE_D = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
}

const ehBorda = (i: number, j: number, img: Image): boolean => {
    return i === 0 || j === 0 || i === img.height - 1 || j === img.width - 1;
};

const getVizinhanca = (i: number, j: number, oImageMatrix: number[][]) => {
    let pixelList: number[] = [];

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            pixelList.push(oImageMatrix[i + x][j + y]);
        }
    }

    return pixelList;
};

const clamp = (n: number, min: number = 0, max: number = 255) => {
    return Math.min(Math.max(n, min), max);
};

const laplacianoDoGaussiano = async (imageBase64: string) => {
    const FILTRO_GAUSS_2 = [
        0, 1, 1, 2, 2, 2, 1, 1, 0, 1, 2, 4, 5, 5, 5, 4, 2, 1, 1, 4, 5, 3, 0, 3,
        5, 4, 1, 2, 5, 3, -12, -24, -12, 3, 5, 2, 2, 5, 0, -24, -40, -24, 0, 5,
        2, 2, 5, 3, -12, -24, -12, 3, 5, 2, 1, 4, 5, 3, 0, 3, 5, 4, 1, 1, 2, 4,
        5, 5, 5, 4, 2, 1, 0, 1, 1, 2, 2, 2, 1, 1, 0,
    ];
    let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();

    let newImage: Image = new Image({
        width: oImage.width,
        height: oImage.height,
        kind: ImageKind.GREY,
    });

    let oImageMatrix = getMatrixFromImage(oImage);

    for (let x = 0; x < newImage.height; x++) {
        for (let y = 0; y < newImage.width; y++) {
            // Usando método de replicação de borda
            if (
                x >= 4 &&
                y >= 4 &&
                x < newImage.height - 4 &&
                y < newImage.height - 4
            ) {
                let pixelsVizinhanca: number[] = [];

                for (let i = -4; i <= 4; i++) {
                    for (let j = -4; j <= 4; j++) {
                        let result = oImageMatrix[x + i][y + j];
                        pixelsVizinhanca.push(result);
                    }
                }

                let newPixelValue = pixelsVizinhanca.reduce(
                    (result, pl, idx) => result + pl * FILTRO_GAUSS_2[idx],
                    0
                );

                newImage.setPixelXY(y, x, [
                    clamp(Math.floor(newPixelValue) / 16),
                ]);
            } else {
                newImage.setPixelXY(y, x, [oImageMatrix[x][y]]);
            }
        }
    }

    return newImage.toDataURL();
};

const laplaciano = async (
    imageBase64: string,
    filtro: number[] = FiltrosLaplace.FILTRO_LAPLACE_C,
    divByNine: boolean = false
) => {
    let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();
    let newImage: Image = new Image({
        width: oImage.width,
        height: oImage.height,
        kind: ImageKind.GREY,
    });

    let oImageMatrix: number[][] = getMatrixFromImage(oImage);

    for (let x = 0; x < newImage.height; x++) {
        for (let y = 0; y < newImage.width; y++) {
            // Usando método de replicação de borda
            if (!ehBorda(x, y, oImage)) {
                let pixelsVizinhanca = getVizinhanca(x, y, oImageMatrix);

                let newPixelValue = pixelsVizinhanca.reduce(
                    (result, pl, idx) => result + pl * filtro[idx],
                    0
                );

                newImage.setPixelXY(y, x, [
                    clamp(newPixelValue / (divByNine ? 9 : 1)),
                ]);
            } else {
                newImage.setPixelXY(y, x, [oImageMatrix[x][y]]);
            }
        }
    }
    return newImage.toDataURL();
};

const unsharp_mask = async (imageBase64: string) => {
    let oImage: Image = resizeImg(await Image.load(imageBase64)).grey();
    let newImage: Image = new Image({
        width: oImage.width,
        height: oImage.height,
        kind: ImageKind.GREY,
    });

    const oImageMatrix: number[][] = getMatrixFromImage(oImage);
    const FILTRO_GAUSS_BLUR = [1, 2, 1, 2, 4, 2, 1, 2, 1];

    let FILTRO_UNSHARP_MASK = [0, -1, 0, -1, 5, -1, 0, -1, 0];

    for (let x = 0; x < newImage.height; x++) {
        for (let y = 0; y < newImage.width; y++) {
            // Usando método de replicação de borda
            if (!ehBorda(x, y, oImage)) {
                let pixelsVizinhanca = getVizinhanca(x, y, oImageMatrix);

                let newPixelValue = pixelsVizinhanca.reduce(
                    (result, pl, idx) => result + pl * FILTRO_GAUSS_BLUR[idx],
                    0
                );

                newImage.setPixelXY(y, x, [clamp(newPixelValue / 16)]);
            } else {
                newImage.setPixelXY(y, x, [oImageMatrix[x][y]]);
            }
        }
    }

    for (let x = 0; x < newImage.height; x++) {
        for (let y = 0; y < newImage.width; y++) {
            // Usando método de replicação de borda
            if (!ehBorda(x, y, oImage)) {
                let pixelsVizinhanca = getVizinhanca(x, y, oImageMatrix);

                let newPixelValue = pixelsVizinhanca.reduce(
                    (result, pl, idx) => result + pl * FILTRO_UNSHARP_MASK[idx],
                    0
                );

                newImage.setPixelXY(y, x, [clamp(newPixelValue)]);
            } else {
                newImage.setPixelXY(y, x, [oImageMatrix[x][y]]);
            }
        }
    }

    return newImage.toDataURL();
};

readImageAsBase64("client/src/assets/placeholders/lena.jpeg").then(path =>
    unsharp_mask(path).then(b => Image.load(b).then(i => i.save("a.png")))
);
