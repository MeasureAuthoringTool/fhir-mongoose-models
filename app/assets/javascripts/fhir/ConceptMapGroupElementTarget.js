const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ConceptMapEquivalenceSchema } = require('./ConceptMapEquivalence');
const { ConceptMapGroupElementTargetDependsOnSchema } = require('./ConceptMapGroupElementTargetDependsOn');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ConceptMapGroupElementTargetSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  equivalence: ConceptMapEquivalenceSchema,
  comment: PrimitiveStringSchema,
  dependsOn: [ConceptMapGroupElementTargetDependsOnSchema],
  product: [ConceptMapGroupElementTargetDependsOnSchema],
  typeName: { type: String, default: 'ConceptMapGroupElementTarget' },
  _type: { type: String, default: 'FHIR::ConceptMapGroupElementTarget' },
});

class ConceptMapGroupElementTarget extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupElementTargetSchema);
    this.typeName = 'ConceptMapGroupElementTarget';
    this._type = 'FHIR::ConceptMapGroupElementTarget';
  }
}

module.exports.ConceptMapGroupElementTargetSchema = ConceptMapGroupElementTargetSchema;
module.exports.ConceptMapGroupElementTarget = ConceptMapGroupElementTarget;
