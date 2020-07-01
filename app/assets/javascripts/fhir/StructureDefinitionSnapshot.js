const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ElementDefinitionSchema } = require('./ElementDefinition');

const StructureDefinitionSnapshotSchema = BackboneElementSchemaFunction({
  element: [ElementDefinitionSchema],
  typeName: { type: String, default: 'StructureDefinitionSnapshot' },
  _type: { type: String, default: 'FHIR::StructureDefinitionSnapshot' },
});

class StructureDefinitionSnapshot extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionSnapshotSchema);
    this.typeName = 'StructureDefinitionSnapshot';
    this._type = 'FHIR::StructureDefinitionSnapshot';
  }
}

module.exports.StructureDefinitionSnapshotSchema = StructureDefinitionSnapshotSchema;
module.exports.StructureDefinitionSnapshot = StructureDefinitionSnapshot;
