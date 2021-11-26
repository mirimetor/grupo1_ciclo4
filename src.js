

const obtenerCitasDisponibles = async(especialidad, fecha_inicio, fecha_final)=>{
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/appointments", {
        method: 'GET', 
    }).then((response)=>response.json())

    let citasApi = response.filter(element=> (
        especialidad === element.especialidad 
        &&
        element.fecha >= fecha_inicio
        &&
        element.fecha <= fecha_final
        ));	

    return new Promise(resolve => {
        setTimeout(() =>{ resolve(citasApi)}, 1000);
    })
        


};

const confirmarCita = async(idCita)=>{
    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/confirm/"+idCita, {
        method: 'POST', 
    }).then((response)=>response.json())

    return new Promise(resolve => {
        setTimeout(() =>{ resolve(response)}, 1000);
    })


};

module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
module.exports.confirmarCita=confirmarCita;