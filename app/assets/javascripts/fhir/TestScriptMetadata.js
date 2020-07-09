const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptMetadataCapabilitySchema } = require('./allSchemaHeaders.js');
const { TestScriptMetadataLinkSchema } = require('./allSchemaHeaders.js');
const { TestScriptMetadataSchema } = require('./allSchemaHeaders.js');

TestScriptMetadataSchema.add(BackboneElementSchema);
TestScriptMetadataSchema.remove('id');
TestScriptMetadataSchema.add({
  link: [TestScriptMetadataLinkSchema],
  capability: [TestScriptMetadataCapabilitySchema],
});

module.exports.TestScriptMetadataSchema = TestScriptMetadataSchema;
