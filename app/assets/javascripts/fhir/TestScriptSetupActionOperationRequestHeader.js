const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionOperationRequestHeaderSchema } = require('./allSchemaHeaders.js');

TestScriptSetupActionOperationRequestHeaderSchema.add(BackboneElementSchema);
TestScriptSetupActionOperationRequestHeaderSchema.remove('id');
TestScriptSetupActionOperationRequestHeaderSchema.add({
  field: PrimitiveStringSchema,
  value: PrimitiveStringSchema,
});

module.exports.TestScriptSetupActionOperationRequestHeaderSchema = TestScriptSetupActionOperationRequestHeaderSchema;
