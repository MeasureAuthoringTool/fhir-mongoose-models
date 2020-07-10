const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestScriptVariableSchema } = require('./allSchemaHeaders.js');

TestScriptVariableSchema.add(BackboneElementSchema);
TestScriptVariableSchema.remove('id');
TestScriptVariableSchema.add({
  name: PrimitiveStringSchema,
  defaultValue: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  expression: PrimitiveStringSchema,
  headerField: PrimitiveStringSchema,
  hint: PrimitiveStringSchema,
  path: PrimitiveStringSchema,
  sourceId: PrimitiveIdSchema,
});

module.exports.TestScriptVariableSchema = TestScriptVariableSchema;
