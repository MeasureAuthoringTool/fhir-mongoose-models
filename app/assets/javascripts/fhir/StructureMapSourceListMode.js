const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const StructureMapSourceListModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'StructureMapSourceListMode' },
  _type: { type: String, default: 'FHIR::StructureMapSourceListMode' },
});

class StructureMapSourceListMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapSourceListModeSchema);
    this.typeName = 'StructureMapSourceListMode';
    this._type = 'FHIR::StructureMapSourceListMode';
  }
}

module.exports.StructureMapSourceListModeSchema = StructureMapSourceListModeSchema;
module.exports.StructureMapSourceListMode = StructureMapSourceListMode;
