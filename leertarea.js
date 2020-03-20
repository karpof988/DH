const fs = require('fs');

let tareas = {
    archivo: 'tareas.json',
    leer: function(){ return JSON.parse(fs.readFileSync(this.archivo,'utf-8'));},
    guardar: function(nuevaTarea){ 
        const t = this.leer();
        t.push({
            descripcion: nuevaTarea,
            estado: 'pendiente'
        });
        fs.writeFileSync(this.archivo, JSON.stringify(t, null, ' '));
        return 'La tarea a guardar es:' + nuevaTarea;
    },
    leerPorEstado: function(filtroEstado){
        const t = this.leer();
        const resultado = t.filter((estado)=>{
            return estado.estado == filtroEstado;
        });
        return resultado;
    }
}

module.exports = tareas;