const { BackboneElementSchema } = require('./BackboneElement');
const { DocumentModeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementDocumentSchema } = require('./allSchemaHeaders.js');

CapabilityStatementDocumentSchema.add(BackboneElementSchema);
CapabilityStatementDocumentSchema.remove('id');
CapabilityStatementDocumentSchema.add({
  mode: DocumentModeSchema,
  documentation: PrimitiveMarkdownSchema,
  profile: PrimitiveCanonicalSchema,
});

module.exports.CapabilityStatementDocumentSchema = CapabilityStatementDocumentSchema;
