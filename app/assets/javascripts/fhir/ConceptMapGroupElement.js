const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ConceptMapGroupElementTargetSchema } = require('./ConceptMapGroupElementTarget');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ConceptMapGroupElementSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  target: [ConceptMapGroupElementTargetSchema],
  typeName: { type: String, default: 'ConceptMapGroupElement' },
  _type: { type: String, default: 'FHIR::ConceptMapGroupElement' },
});

class ConceptMapGroupElement extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapGroupElementSchema);
    this.typeName = 'ConceptMapGroupElement';
    this._type = 'FHIR::ConceptMapGroupElement';
  }
}

module.exports.ConceptMapGroupElementSchema = ConceptMapGroupElementSchema;
module.exports.ConceptMapGroupElement = ConceptMapGroupElement;
