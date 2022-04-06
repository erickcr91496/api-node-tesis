const { response } = require('express');
const { Proyecto,  } = require('../models');
const { Evaluacion } = require('../models');
const usuario = require('../models/usuario');


const obtenerProyectos = async(req, res = response ) => {

   
    const proyecto = await Proyecto.find({}).populate('usuario','nombre')

    res.json({
        
        proyecto
    });
}

const obtenerEvaluaciones = async(req, res = response ) => {

    const evaluacion = await  
        Evaluacion.find({}).populate('proyecto')
        // .populate({
        //     path:'proyecto',
        //     select:'usuario'
        // })
                                            // .populate('usuario','nombre')
    res.json({
        evaluacion,
    }
    );
}
const getEvaluacionesByUser = async(req, res = response ) => {
    const { id } = req.params;
    console.log('uid params:'+id)
    const proyectoUser = await Proyecto.find({usuario:id})
     const evaluacion = await Evaluacion.find({}) 

     .populate({
         path:'proyecto',
         match:{usuario:id}
     })
     //  .populate('proyecto','usuario')
     const evaluaciones = evaluacion.filter(record => record.proyecto);

    res.json({
        evaluaciones,

    });
}
const getEvaluacion = async(req, res = response ) => {
    const { id } = req.params;
     const evaluacion = await Evaluacion.findById(id) 
.populate('proyecto')
     //  .populate('proyecto','usuario')
    // const evaluaciones = evaluacion.filter(record => record.proyecto);

    res.json({
        evaluacion,

    });
}
const crearProyectos = async(req, res = response) => {
    
    const { ...body } = req.body;

    // Guardar en BD
    const data = {
        ...body,
        usuario: req.usuario._id
    }

    const proyecto = new Proyecto(data)

   const {id} =  await proyecto.save()
   console.log(id);

    res.status(201).json(proyecto);
    return id;
}

const crearEvaluacion = async(req, res = response ) => {

    const {  nombre, autor } = req.body;  
    // Guardar en BD
    const data1 = {
        nombre,
        autor,
        usuario: req.usuario._id,

    } 
    // data1.nombre =nombre.toUpperCase();
    // data1.autor =autor.toUpperCase();

    const proyecto = new Proyecto(data1)

    const {id} =  await proyecto.save()
 

    // --------------------------------> evaluaciones
    const {check1,check2,check3,check4,check5,check6,check7,check8,check9,check10,check11,check12,check13,check14,check15, valor} = req.body 
     const data2 = {
        proyecto: id,
        check1: check1,
        check2: check2,
        check3: check3,
        check4: check4,
        check5: check5,
        check6: check6,
        check7: check7,
        check8: check8,
        check9: check9,
        check10: check10,
        check11: check11,
        check12: check12,
        check13: check13,
        check14: check14,
        check15: check15,
        valor:valor
    } 

    const evaluacion = new Evaluacion(data2)

    await evaluacion.save()
    res.status(201).json(evaluacion);
    return
}
const actualizarEvaluacion = async(req, res = response ) => {
    const { id } = req.params;

    const {  proyecto:proyect } = req.body;  
    const {nombre,autor} = proyect

    const data1 = {
        nombre,
        autor,
        usuario: req.usuario._id,
        fecha: new Date()
    } 
    const evaluacionData = await Evaluacion.findById(id) 
    .populate('proyecto')

    const {proyecto} =  evaluacionData
    const idProyecto = proyecto
    const proyectoData = await Proyecto.findByIdAndUpdate(idProyecto,data1,
        {new:true})
 
    //  res.status(201).json(proyectoData);

    // --------------------------------> evaluaciones
    const {check1,check2,check3,check4,check5,check6,
        check7,check8,check9,check10,check11,check12,check13,check14,check15, valor} = req.body 
     const data2 = {
        proyecto: idProyecto,
        check1: check1,
        check2: check2,
        check3: check3,
        check4: check4,
        check5: check5,
        check6: check6,
        check7: check7,
        check8: check8,
        check9: check9,
        check10: check10,
        check11: check11,
        check12: check12,
        check13: check13,
        check14: check14,
        check15: check15,
        valor:valor
    } 

    const evaluacion = await Evaluacion.findByIdAndUpdate(id,data2,
        {new:true})

    res.json(evaluacion);

}




module.exports = {
    
    obtenerProyectos,
    crearProyectos,
    crearEvaluacion,
    actualizarEvaluacion,
    obtenerEvaluaciones,
    getEvaluacionesByUser,
    getEvaluacion

}