const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = multiplicar = require('./Multiplicar/Multiplicar');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch((err) => console.log(err));
        break;
    case 'borrar':
        console.log('borrar');
        break;

    default:
        console.log('comando no reconocido');



}

//console.log(process.argv);

//let argv2 = process.argv
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(`Base: ${argv.base}`);
//console.log(`Limite: ${argv.limite}`);
//console.log(argv2);

//multiplicar.crearArchivo