const fs = require('fs');
// const tareas = require('./tareas.json');
const accion = process.argv[2];
const chalk = require('chalk');

// const tareas = fs.readFileSync('tareas.json','utf-8');
//console.log(JSON.parse(tareas));

// const tareas = {
//     archivo: 'tareas.json',
//     leer: function(){ return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));}
// }

const tareas = require('./leertarea.js');
const archivoTareas = require('./leertarea.js');
//console.log(tareas.leer());

switch( accion ){
    case 'listar':
        const tareasArray = tareas.leer();
        console.log(chalk.yellow("\nTarea \t\t\t\tEstado"));
        tareasArray.forEach((valor, indice) => {
            console.log((indice+1) + ' ' + valor.descripcion + '\t\t' + valor.estado);
        });
        console.log('\nEl usuario quiere listar');
    break;
    case 'agregar': 
        const tareaRecibida = process.argv[3];
        if(!tareaRecibida){
            console.log("no existe la tarea"); 
            break;
        } 
        const resultadoGuardar = tareas.guardar(process.argv[3]);
        console.log(resultadoGuardar);
    break;
    case 'filtrar':
        const filtroRecibido = process.argv[3];
        if(!filtroRecibido){
            console.log("ingrese un filtro"); 
            break;
        } 
        const resultadoFiltrar = tareas.leerPorEstado(process.argv[3]);
        console.log(chalk.yellow("\nTarea \t\t\t\tEstado"));
        resultadoFiltrar.forEach((valor, indice) => {
            console.log((indice+1) + ' ' + valor.descripcion + '\t\t' + valor.estado);
        });
        console.log('');
    break;
    case undefined:
        console.log('Accion desconocida.');
    break;
    default:
        console.log('No es una acción valida');
}