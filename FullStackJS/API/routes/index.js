const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function() {

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', pacienteController.nuevoCliente)

    // Obtiene todos los registros de pacientes en la DB
    router.get('/pacientes', pacienteController.obtenerPacientes)

    // Obtiene un solo paciente por id desde la DB
    router.get('/pacientes/:id', pacienteController.obtenerPaciente)

    // Actualizar un registro con un id especifico
    router.put('/pacientes/:id', pacienteController.actualizarPaciente)

    // Eliminar un registro con un id especifico
    router.delete('/pacientes/:id', pacienteController.borrarPaciente)

    return router;
}

