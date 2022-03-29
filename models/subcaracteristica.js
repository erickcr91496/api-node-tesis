const { Schema, model } = require('mongoose');

const SubcaracteristicaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        require: true,
        default: false
    }


});


SubcaracteristicaSchema.methods.toJSON = function() {
    const { __v,  ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Subcaracteristica', SubcaracteristicaSchema );
