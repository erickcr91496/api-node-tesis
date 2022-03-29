const { Router } = require('express');


const { 
        obtenerProyectos, ob,
    crearEvaluacion, crearProyectos, obtenerEvaluaciones    } = require('../controllers/proyecto');
const { validarJWT, validarCampos } = require('../middlewares');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerProyectos );

router.post('/', [
    validarJWT,
    validarCampos,
    
],
crearEvaluacion );

module.exports = router;