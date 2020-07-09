const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionAssertSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionOperationSchema } = require('./allSchemaHeaders.js');
const { TestScriptTestActionSchema } = require('./allSchemaHeaders.js');

TestScriptTestActionSchema.add(BackboneElementSchema);
TestScriptTestActionSchema.remove('id');
TestScriptTestActionSchema.add({
  operation: TestScriptSetupActionOperationSchema,
  assert: TestScriptSetupActionAssertSchema,
});

module.exports.TestScriptTestActionSchema = TestScriptTestActionSchema;
