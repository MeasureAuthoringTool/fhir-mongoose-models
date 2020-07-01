const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ConceptMapGroupElementSchema } = require('./ConceptMapGroupElement');
const { ConceptMapGroupUnmappedSchema } = require('./ConceptMapGroupUnmapped');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ConceptMapGroupSchema = BackboneElementSchemaFunction({
  source: PrimitiveUriSchema,
  sourceVersion: PrimitiveStringSchema,
  target: PrimitiveUriSchema,
  targetVersion: PrimitiveStringSchema,
  element: [ConceptMapGroupElementSchema],
  unmapped: ConceptMapGroupUnmappedSchema,
  typeName: { type: String, default: 'ConceptMapGroup' },
  _type: { type: String, default: 'FHIR::ConceptMapGroup' },
});

class ConceptMapGroup extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupSchema);
    this.typeName = 'ConceptMapGroup';
    this._type = 'FHIR::ConceptMapGroup';
  }
}

module.exports.ConceptMapGroupSchema = ConceptMapGroupSchema;
module.exports.ConceptMapGroup = ConceptMapGroup;
