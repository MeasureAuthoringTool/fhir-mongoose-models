const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ParameterUseSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ParameterUse' },
  _type: { type: String, default: 'FHIR::ParameterUse' },
});

class ParameterUse extends mongoose.Document {
  constructor(object) {
    super(object, ParameterUseSchema);
    this.typeName = 'ParameterUse';
    this._type = 'FHIR::ParameterUse';
  }
}

module.exports.ParameterUseSchema = ParameterUseSchema;
module.exports.ParameterUse = ParameterUse;
