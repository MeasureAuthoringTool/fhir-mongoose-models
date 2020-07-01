const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ConceptMapGroupElementTargetDependsOnSchema = BackboneElementSchemaFunction({
  property: PrimitiveUriSchema,
  system: PrimitiveCanonicalSchema,
  value: PrimitiveStringSchema,
  display: PrimitiveStringSchema,
  typeName: { type: String, default: 'ConceptMapGroupElementTargetDependsOn' },
  _type: { type: String, default: 'FHIR::ConceptMapGroupElementTargetDependsOn' },
});

class ConceptMapGroupElementTargetDependsOn extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupElementTargetDependsOnSchema);
    this.typeName = 'ConceptMapGroupElementTargetDependsOn';
    this._type = 'FHIR::ConceptMapGroupElementTargetDependsOn';
  }
}

module.exports.ConceptMapGroupElementTargetDependsOnSchema = ConceptMapGroupElementTargetDependsOnSchema;
module.exports.ConceptMapGroupElementTargetDependsOn = ConceptMapGroupElementTargetDependsOn;
