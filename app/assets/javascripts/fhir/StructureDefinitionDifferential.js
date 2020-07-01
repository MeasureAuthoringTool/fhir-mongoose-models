const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ElementDefinitionSchema } = require('./ElementDefinition');

const StructureDefinitionDifferentialSchema = BackboneElementSchemaFunction({
  element: [ElementDefinitionSchema],
  typeName: { type: String, default: 'StructureDefinitionDifferential' },
  _type: { type: String, default: 'FHIR::StructureDefinitionDifferential' },
});

class StructureDefinitionDifferential extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionDifferentialSchema);
    this.typeName = 'StructureDefinitionDifferential';
    this._type = 'FHIR::StructureDefinitionDifferential';
  }
}

module.exports.StructureDefinitionDifferentialSchema = StructureDefinitionDifferentialSchema;
module.exports.StructureDefinitionDifferential = StructureDefinitionDifferential;
