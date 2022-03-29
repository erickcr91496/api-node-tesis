const { Router } = require('express');


const { 
        obtenerCaracteristica,
    } = require('../controllers/caracteristicas');

const router = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
router.get('/', obtenerCaracteristica );



module.exports = router;