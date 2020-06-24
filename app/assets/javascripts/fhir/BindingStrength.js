const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BindingStrengthSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'BindingStrength' },
});

class BindingStrength extends mongoose.Document {
  constructor(object) {
    super(object, BindingStrengthSchema);
    this._type = 'FHIR::BindingStrength';
  }
};


module.exports.BindingStrengthSchema = BindingStrengthSchema;
module.exports.BindingStrength = BindingStrength;
