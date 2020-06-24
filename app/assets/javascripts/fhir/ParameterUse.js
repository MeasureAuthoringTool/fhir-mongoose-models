const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParameterUseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ParameterUse' },
});

class ParameterUse extends mongoose.Document {
  constructor(object) {
    super(object, ParameterUseSchema);
    this._type = 'FHIR::ParameterUse';
  }
};


module.exports.ParameterUseSchema = ParameterUseSchema;
module.exports.ParameterUse = ParameterUse;
