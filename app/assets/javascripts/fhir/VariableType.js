const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const VariableTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'VariableType' },
  _type: { type: String, default: 'FHIR::VariableType' },
});

class VariableType extends mongoose.Document {
  constructor(object) {
    super(object, VariableTypeSchema);
    this.typeName = 'VariableType';
    this._type = 'FHIR::VariableType';
  }
}

module.exports.VariableTypeSchema = VariableTypeSchema;
module.exports.VariableType = VariableType;
