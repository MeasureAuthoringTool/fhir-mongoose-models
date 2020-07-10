const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { TestScriptMetadataCapabilitySchema } = require('./allSchemaHeaders.js');

TestScriptMetadataCapabilitySchema.add(BackboneElementSchema);
TestScriptMetadataCapabilitySchema.remove('id');
TestScriptMetadataCapabilitySchema.add({
  required: PrimitiveBooleanSchema,
  _validated: PrimitiveBooleanSchema,
  description: PrimitiveStringSchema,
  origin: [PrimitiveIntegerSchema],
  destination: PrimitiveIntegerSchema,
  link: [PrimitiveUriSchema],
  capabilities: PrimitiveCanonicalSchema,
});

module.exports.TestScriptMetadataCapabilitySchema = TestScriptMetadataCapabilitySchema;
