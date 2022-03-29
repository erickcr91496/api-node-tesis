const { response } = require('express');
const { Evaluacion } = require('../models');



const crearEvaluacion = async(req, res = response ) => {

    const { ...body } = req.body;

    // Guardar en BD
    const data = {
        ...body,
        proyecto: body.proyecto,
        check1: body.check1,
        check2: body.check2,
        check3: body.check3,
        check4: body.check4,
        check5: body.check5,
        check6: body.check6,
        check7: body.check7,
        check8: body.check8,
        check9: body.check9,
        check10: body.check10,
        check11: body.check11,
        check12: body.check12,
        check13: body.check13,
        check14: body.check14,
        check15: body.check15,
        valor:body.valor
    }

    const evaluacion = new Evaluacion(data)

    await evaluacion.save()
    res.status(201).json(evaluacion);

}





module.exports = {
    crearEvaluacion,

}