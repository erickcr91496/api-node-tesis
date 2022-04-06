const { Router } = require('express');


const { 
       obtenerEvaluaciones , getEvaluacionesByUser, getEvaluacion, actualizarEvaluacion } = require('../controllers/proyecto');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerEvaluaciones );
router.get('/:id', getEvaluacionesByUser)
router.get('/detail/:id', getEvaluacion)
router.put('/:id', actualizarEvaluacion)



module.exports = router;