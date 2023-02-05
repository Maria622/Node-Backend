
/*
    Rutas de Usuarios/ Auth
    host + api/auth
*/

const { Router } = require('express');
const { check }= require('express-validator');

const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { ValidarJWT } = require('../middlewares/Validar.jwt');




const router = Router()



router.post(
    '/new',
    [//midlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
     crearUsuario
     
);

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos

    ],loginUsuario
    
);

//verificaar jwt y regresar nuevo jwt
router.get('/renew', ValidarJWT, revalidarToken);






 module.exports = router;