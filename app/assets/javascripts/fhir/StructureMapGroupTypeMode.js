const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapGroupTypeModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapGroupTypeMode' },
  _type: { type: String, default: 'FHIR::StructureMapGroupTypeMode' },
});

class StructureMapGroupTypeMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupTypeModeSchema);
    this.typeName = 'StructureMapGroupTypeMode';
    this._type = 'FHIR::StructureMapGroupTypeMode';
  }
}

module.exports.StructureMapGroupTypeModeSchema = StructureMapGroupTypeModeSchema;
module.exports.StructureMapGroupTypeMode = StructureMapGroupTypeMode;
