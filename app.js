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
//console.log(tareas.leer());

switch( accion ){
    case 'listar':
        const tareasArray = tareas.leer();
        console.log(chalk.yellow("\nTarea \t\t\t\tEstado"));
        for (let i = 0; i < tareasArray.length; i++) {
            const element = tareasArray[i];
            console.log((i+1) + ' ' + element.descripcion + '\t\t' + element.estado);
        }
        console.log('\nEl usuario quiere listar');
    break;
    case undefined:
        console.log('Accion desconocida.');
    break;
    default:
        console.log('No es una acción valida');
}