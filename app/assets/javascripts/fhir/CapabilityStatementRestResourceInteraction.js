const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { TypeRestfulInteractionSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceInteractionSchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestResourceInteractionSchema.add(BackboneElementSchema);
CapabilityStatementRestResourceInteractionSchema.remove('id');
CapabilityStatementRestResourceInteractionSchema.add({
  code: TypeRestfulInteractionSchema,
  documentation: PrimitiveMarkdownSchema,
});

module.exports.CapabilityStatementRestResourceInteractionSchema = CapabilityStatementRestResourceInteractionSchema;
