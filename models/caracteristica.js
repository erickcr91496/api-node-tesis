const { Schema, model } = require('mongoose');

const CaracteristicaSchema = Schema({
    caracteristica: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    subcaracteristica: {
        type: Schema.Types.ObjectId,
        ref: 'Subcaracteristica',
        required: true
    },

});


CaracteristicaSchema.methods.toJSON = function() {
    const { __v,  ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Caracteristica', CaracteristicaSchema );
