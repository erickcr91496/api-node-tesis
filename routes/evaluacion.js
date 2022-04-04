const { Router } = require('express');


const { 
       obtenerEvaluaciones , getEvaluacionesByUser, getEvaluacion } = require('../controllers/proyecto');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerEvaluaciones );
router.get('/:id', getEvaluacionesByUser)
router.get('/detail/:id', getEvaluacion)



module.exports = router;