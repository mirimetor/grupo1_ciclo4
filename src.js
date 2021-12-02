const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get('/api/medical-appointments/apointments', (req, res, next) => {
        console.log("Pedir datos de citas");
        next();
}, (req, res) => {
    res.json(appointments);
}
);

app.post('/api/medical-appointments/confirm/:appointment_id', (req, res) => {
    console.log("Agendar una cita");
    let appoint = parseInt( req.params.appointment_id );
    let array = appointments;
    appointments = appointments.map(appointment => {
        if(appointment.id === appoint){
            appointment.status = "confirmed";
        }
    })

    res.json(array);
}
)

module.exports = app;
