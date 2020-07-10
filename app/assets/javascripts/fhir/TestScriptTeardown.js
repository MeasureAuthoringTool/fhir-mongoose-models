const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptTeardownActionSchema } = require('./allSchemaHeaders.js');
const { TestScriptTeardownSchema } = require('./allSchemaHeaders.js');

TestScriptTeardownSchema.add(BackboneElementSchema);
TestScriptTeardownSchema.remove('id');
TestScriptTeardownSchema.add({
  action: [TestScriptTeardownActionSchema],
});

module.exports.TestScriptTeardownSchema = TestScriptTeardownSchema;
