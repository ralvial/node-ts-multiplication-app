import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';


//const message:string = 'Hola mundo!';

//console.log( message );



const buildMultiplyTable=()=>{

    const {b:base, l:limit, s:showTable} = yarg;
    let outputMessage:string ='';
    //const currentFactor: number = base;
    //const maxTable: number = limit;
    const outputPath = `outputs`;
    const headerMessage = `    
=================================
         Tabla del ${base}
=================================\n
`;
        
    for (let index = 1; index <= limit; index++) {
        outputMessage+= `${base} x ${index}  = ${base*index}\n`;
    }

    outputMessage=  headerMessage + outputMessage;

    if(showTable)  console.log( outputMessage );


    fs.mkdirSync(outputPath,{recursive:true});
    fs.writeFile(`${outputPath}/tabla-${base}.txt`, outputMessage,err=>{
        if(err){console.log( err ); return;} 
        console.log( 'table creada' );
    });
    

}



buildMultiplyTable();