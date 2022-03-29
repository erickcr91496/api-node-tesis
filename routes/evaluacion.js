const { Router } = require('express');


const { 
       obtenerEvaluaciones  } = require('../controllers/proyecto');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerEvaluaciones );



module.exports = router;