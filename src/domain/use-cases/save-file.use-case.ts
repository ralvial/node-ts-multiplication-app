import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent       : string;
    fileDestination   : string;
    fileName          : string;
}


export class SaveFile implements SaveFileUseCase {

    execute({
        fileContent,
        fileDestination,
        fileName}: Options) {

        let retorno = true;
        fs.mkdirSync(fileDestination, { recursive: true });
        fs.writeFile(`${fileDestination}/${fileName}.txt`, fileContent, err => {
            if (err) { console.error(err); retorno= false; }
            retorno = true;
        });
        return retorno;

    };

}