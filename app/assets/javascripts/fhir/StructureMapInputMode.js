const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapInputModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapInputMode' },
  _type: { type: String, default: 'FHIR::StructureMapInputMode' },
});

class StructureMapInputMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapInputModeSchema);
    this.typeName = 'StructureMapInputMode';
    this._type = 'FHIR::StructureMapInputMode';
  }
}

module.exports.StructureMapInputModeSchema = StructureMapInputModeSchema;
module.exports.StructureMapInputMode = StructureMapInputMode;
