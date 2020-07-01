const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { TypeRestfulInteractionSchema } = require('./TypeRestfulInteraction');

const CapabilityStatementRestResourceInteractionSchema = BackboneElementSchemaFunction({
  code: TypeRestfulInteractionSchema,
  documentation: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'CapabilityStatementRestResourceInteraction' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRestResourceInteraction' },
});

class CapabilityStatementRestResourceInteraction extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceInteractionSchema);
    this.typeName = 'CapabilityStatementRestResourceInteraction';
    this._type = 'FHIR::CapabilityStatementRestResourceInteraction';
  }
}

module.exports.CapabilityStatementRestResourceInteractionSchema = CapabilityStatementRestResourceInteractionSchema;
module.exports.CapabilityStatementRestResourceInteraction = CapabilityStatementRestResourceInteraction;
