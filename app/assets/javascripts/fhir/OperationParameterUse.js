const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OperationParameterUseSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'OperationParameterUse' },
});

class OperationParameterUse extends mongoose.Document {
  constructor(object) {
    super(object, OperationParameterUseSchema);
    this._type = 'FHIR::OperationParameterUse';
  }
};


module.exports.OperationParameterUseSchema = OperationParameterUseSchema;
module.exports.OperationParameterUse = OperationParameterUse;
