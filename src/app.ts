import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


//console.log( process.argv );


(async ()=>{
    //console.log( yarg.b );
    await main();
    console.log( 'Fin del programa' );
})();

async function main(){
    //console.log( yarg );
    const {b:base, l:limit, s:showTable, n:fileName, d:fileDestination} = yarg;
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}