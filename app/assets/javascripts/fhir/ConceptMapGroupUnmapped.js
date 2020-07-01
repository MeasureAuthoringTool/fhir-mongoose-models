const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ConceptMapGroupUnmappedModeSchema } = require('./ConceptMapGroupUnmappedMode');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ConceptMapGroupUnmappedSchema = BackboneElementSchemaFunction({
  mode: ConceptMapGroupUnmappedModeSchema,
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  url: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'ConceptMapGroupUnmapped' },
  _type: { type: String, default: 'FHIR::ConceptMapGroupUnmapped' },
});

class ConceptMapGroupUnmapped extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupUnmappedSchema);
    this.typeName = 'ConceptMapGroupUnmapped';
    this._type = 'FHIR::ConceptMapGroupUnmapped';
  }
}

module.exports.ConceptMapGroupUnmappedSchema = ConceptMapGroupUnmappedSchema;
module.exports.ConceptMapGroupUnmapped = ConceptMapGroupUnmapped;
