const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupSchema } = require('./allSchemaHeaders.js');

TestScriptSetupSchema.add(BackboneElementSchema);
TestScriptSetupSchema.remove('id');
TestScriptSetupSchema.add({
  action: [TestScriptSetupActionSchema],
});

module.exports.TestScriptSetupSchema = TestScriptSetupSchema;
