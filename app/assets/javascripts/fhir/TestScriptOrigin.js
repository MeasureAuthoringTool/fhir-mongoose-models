const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { TestScriptOriginSchema } = require('./allSchemaHeaders.js');

TestScriptOriginSchema.add(BackboneElementSchema);
TestScriptOriginSchema.remove('id');
TestScriptOriginSchema.add({
  index: PrimitiveIntegerSchema,
  profile: CodingSchema,
});

module.exports.TestScriptOriginSchema = TestScriptOriginSchema;
