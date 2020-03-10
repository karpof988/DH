const fs = require('fs');
const tareas = {
    archivo: 'tareas.json',
    leer: function(){ return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));}
}

module.exports = tareas;