const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { SystemRestfulInteractionSchema } = require('./SystemRestfulInteraction');

const CapabilityStatementRestInteractionSchema = BackboneElementSchemaFunction({
  code: SystemRestfulInteractionSchema,
  documentation: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'CapabilityStatementRestInteraction' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRestInteraction' },
});

class CapabilityStatementRestInteraction extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestInteractionSchema);
    this.typeName = 'CapabilityStatementRestInteraction';
    this._type = 'FHIR::CapabilityStatementRestInteraction';
  }
}

module.exports.CapabilityStatementRestInteractionSchema = CapabilityStatementRestInteractionSchema;
module.exports.CapabilityStatementRestInteraction = CapabilityStatementRestInteraction;
