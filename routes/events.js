
/*
events routes
/api/events

*/

const { crearEvento, getEventos, actualizarEventos, eliminarEventos } = require("../controllers/events");
const {ValidarJWT} = require('../middlewares/Validar.jwt');
const { Router } = require('express');
const {check}= require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");
const router = Router()


router.use(ValidarJWT)

//Obtener eventos
router.get('/', getEventos);


//Crear un nuevo eventos
router.post('/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],

    crearEvento);

//Actualizar Eventos
router.put('/:id', actualizarEventos);

//Borrar evennto
router.delete('/:id', eliminarEventos);


module.exports = router;