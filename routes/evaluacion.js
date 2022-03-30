const { Router } = require('express');


const { 
       obtenerEvaluaciones , getEvaluacionesByUser  } = require('../controllers/proyecto');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerEvaluaciones );
router.get('/:id', getEvaluacionesByUser)



module.exports = router;