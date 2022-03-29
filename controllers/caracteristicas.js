const { response } = require('express');
const { Caracteristica } = require('../models');


const obtenerCaracteristica = async(req, res = response ) => {

   // const { limite = 5, desde = 0 } = req.query;
    const [caracteristicas] = await Promise.all([

        Caracteristica.find()
        .populate('subcaracteristica','nombre')

            
    ]);

    res.json({
        
        caracteristicas
    });
}


module.exports = {
    
    obtenerCaracteristica,
    

}