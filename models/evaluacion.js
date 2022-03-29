const { Schema, model } = require('mongoose');


const EvaluacionSchema = Schema({
 
    
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto',
        required: true
    },

    check1: {
        type: Boolean ,
        default: false,
        required: true
    },
    check2: {
        type: Boolean,
        default: false,
        required: true
    },
    check3: {
        type: Boolean,
        default: false,
        required: true
    },
    check4: {
        type: Boolean,
        default: false,
        required: true
    },
    check5: {
        type: Boolean,
        default: false,
        required: true
    },
    check6: {
        type: Boolean,
        default: false,
        required: true
    },
    check7: {
        type: Boolean,
        default: false,
        required: true
    },
    check8: {
        type: Boolean,
        default: false,
        required: true
    },
    check9: {
        type: Boolean,
        default: false,
        required: true
    },
    check10: {
        type: Boolean,
        default: false,
        required: true
    },
    check11: {
        type: Boolean,
        default: false,
        required: true
    },
    check12: {
        type: Boolean,
        default: false,
        required: true
    },
    check13: {
        type: Boolean,
        default: false,
        required: true
    },
    check14: {
        type: Boolean,
        default: false,
        required: true
    },
    check15: {
        type: Boolean,
        default: false,
        required: true
    },
    valor: {
        type: Number,
        default: 0,
        required:true
    },
});

// const EvaluacionSchema = Schema({
 
//     proyecto: {
//         type: Schema.Types.ObjectId,
//         ref: 'Proyecto',
//         required: true
//     },

//     caracteristica: {
//         type: Schema.Types.ObjectId,
//         ref: 'Caracteristica',
//         required: true
//     },
//     valor: {
//         type: Number,
//         default: 0
//     },
// });


EvaluacionSchema.methods.toJSON = function() {
    const { __v,  ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Evaluacion', EvaluacionSchema );
