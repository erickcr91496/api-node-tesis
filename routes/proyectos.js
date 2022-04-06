const { Router } = require('express');


const { 
        obtenerProyectos, ob,
    crearEvaluacion, crearProyectos, obtenerEvaluaciones, actualizarEvaluacion    } = require('../controllers/proyecto');
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
router.put('/:id',[
    validarJWT,
    validarCampos, 
], actualizarEvaluacion)

module.exports = router;