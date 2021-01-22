const { Module } = require('module');

//ARCHIVO ORIGINAL SIN OPTIMIZACION
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b',
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'genera un archivo txt con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b',
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;


//aRCHIVO oPTIMIZADO
const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'genera un archivo txt con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};