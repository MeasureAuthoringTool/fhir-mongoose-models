const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionAssertSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionOperationSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionSchema } = require('./allSchemaHeaders.js');

TestScriptSetupActionSchema.add(BackboneElementSchema);
TestScriptSetupActionSchema.remove('id');
TestScriptSetupActionSchema.add({
  operation: TestScriptSetupActionOperationSchema,
  assert: TestScriptSetupActionAssertSchema,
});

module.exports.TestScriptSetupActionSchema = TestScriptSetupActionSchema;
