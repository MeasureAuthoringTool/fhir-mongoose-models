const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapModelModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapModelMode' },
  _type: { type: String, default: 'FHIR::StructureMapModelMode' },
});

class StructureMapModelMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapModelModeSchema);
    this.typeName = 'StructureMapModelMode';
    this._type = 'FHIR::StructureMapModelMode';
  }
}

module.exports.StructureMapModelModeSchema = StructureMapModelModeSchema;
module.exports.StructureMapModelMode = StructureMapModelMode;
