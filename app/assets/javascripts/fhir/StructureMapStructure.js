const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { StructureMapModelModeSchema } = require('./StructureMapModelMode');

const StructureMapStructureSchema = BackboneElementSchemaFunction({
  url: PrimitiveCanonicalSchema,
  mode: StructureMapModelModeSchema,
  alias: PrimitiveStringSchema,
  documentation: PrimitiveStringSchema,
  typeName: { type: String, default: 'StructureMapStructure' },
  _type: { type: String, default: 'FHIR::StructureMapStructure' },
});

class StructureMapStructure extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapStructureSchema);
    this.typeName = 'StructureMapStructure';
    this._type = 'FHIR::StructureMapStructure';
  }
}

module.exports.StructureMapStructureSchema = StructureMapStructureSchema;
module.exports.StructureMapStructure = StructureMapStructure;
