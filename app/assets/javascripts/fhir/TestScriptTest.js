const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestScriptTestActionSchema } = require('./allSchemaHeaders.js');
const { TestScriptTestSchema } = require('./allSchemaHeaders.js');

TestScriptTestSchema.add(BackboneElementSchema);
TestScriptTestSchema.remove('id');
TestScriptTestSchema.add({
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  action: [TestScriptTestActionSchema],
});

module.exports.TestScriptTestSchema = TestScriptTestSchema;
