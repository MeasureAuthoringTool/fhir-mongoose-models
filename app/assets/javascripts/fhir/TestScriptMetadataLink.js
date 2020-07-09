const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { TestScriptMetadataLinkSchema } = require('./allSchemaHeaders.js');

TestScriptMetadataLinkSchema.add(BackboneElementSchema);
TestScriptMetadataLinkSchema.remove('id');
TestScriptMetadataLinkSchema.add({
  url: PrimitiveUriSchema,
  description: PrimitiveStringSchema,
});

module.exports.TestScriptMetadataLinkSchema = TestScriptMetadataLinkSchema;
