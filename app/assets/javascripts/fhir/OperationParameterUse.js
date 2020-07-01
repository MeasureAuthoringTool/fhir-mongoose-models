const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const OperationParameterUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'OperationParameterUse' },
  _type: { type: String, default: 'FHIR::OperationParameterUse' },
});

class OperationParameterUse extends mongoose.Document {
  constructor(object) {
    super(object, OperationParameterUseSchema);
    this.typeName = 'OperationParameterUse';
    this._type = 'FHIR::OperationParameterUse';
  }
}

module.exports.OperationParameterUseSchema = OperationParameterUseSchema;
module.exports.OperationParameterUse = OperationParameterUse;
