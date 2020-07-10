const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { TestScriptDestinationSchema } = require('./allSchemaHeaders.js');

TestScriptDestinationSchema.add(BackboneElementSchema);
TestScriptDestinationSchema.remove('id');
TestScriptDestinationSchema.add({
  index: PrimitiveIntegerSchema,
  profile: CodingSchema,
});

module.exports.TestScriptDestinationSchema = TestScriptDestinationSchema;
