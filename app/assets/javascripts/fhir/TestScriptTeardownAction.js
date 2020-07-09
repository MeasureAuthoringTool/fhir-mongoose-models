const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionOperationSchema } = require('./allSchemaHeaders.js');
const { TestScriptTeardownActionSchema } = require('./allSchemaHeaders.js');

TestScriptTeardownActionSchema.add(BackboneElementSchema);
TestScriptTeardownActionSchema.remove('id');
TestScriptTeardownActionSchema.add({
  operation: TestScriptSetupActionOperationSchema,
});

module.exports.TestScriptTeardownActionSchema = TestScriptTeardownActionSchema;
