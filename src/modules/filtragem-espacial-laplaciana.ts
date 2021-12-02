/* 

    # Coisas para implementar:
        - [] Filtro de sharpening
        - 
*/

class FiltrosLaplace {
    static FILTRO_LAPLACE_A = [0, 1, 0, 1, -4, 1, 0, 1, 0];
    static FILTRO_LAPLACE_B = [1, 1, 1, 1, -8, 1, 1, 1, 1];
    static FILTRO_LAPLACE_C = [0, -1, 0, -1, 4, -1, 0, -1, 0];
    static FILTRO_LAPLACE_D = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
}

import Image from "image-js";
import {
    readImageAsBase64,
    resizeImg,
    ImageKind,
    getMatrixFromImage,
} from "./utils";

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

const laplaciano = async (imageBase64: string,filtro:number [],divByNine: boolean = false) => {
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

readImageAsBase64("client/src/assets/placeholders/lena.jpeg").then(path =>
    laplaciano(path, FiltrosLaplace.FILTRO_LAPLACE_A).then(b => Image.load(b).then(i => i.save("laplace.png")))
);
