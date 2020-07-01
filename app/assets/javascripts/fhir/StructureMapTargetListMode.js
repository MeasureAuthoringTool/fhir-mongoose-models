const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapTargetListModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapTargetListMode' },
  _type: { type: String, default: 'FHIR::StructureMapTargetListMode' },
});

class StructureMapTargetListMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapTargetListModeSchema);
    this.typeName = 'StructureMapTargetListMode';
    this._type = 'FHIR::StructureMapTargetListMode';
  }
}

module.exports.StructureMapTargetListModeSchema = StructureMapTargetListModeSchema;
module.exports.StructureMapTargetListMode = StructureMapTargetListMode;
