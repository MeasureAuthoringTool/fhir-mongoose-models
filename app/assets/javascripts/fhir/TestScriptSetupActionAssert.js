const { AssertionDirectionTypeSchema } = require('./allSchemaHeaders.js');
const { AssertionOperatorTypeSchema } = require('./allSchemaHeaders.js');
const { AssertionResponseTypesSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { FHIRDefinedTypeSchema } = require('./allSchemaHeaders.js');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestScriptRequestMethodCodeSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionAssertSchema } = require('./allSchemaHeaders.js');

TestScriptSetupActionAssertSchema.add(BackboneElementSchema);
TestScriptSetupActionAssertSchema.remove('id');
TestScriptSetupActionAssertSchema.add({
  label: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  direction: AssertionDirectionTypeSchema,
  compareToSourceId: PrimitiveStringSchema,
  compareToSourceExpression: PrimitiveStringSchema,
  compareToSourcePath: PrimitiveStringSchema,
  contentType: MimeTypeSchema,
  expression: PrimitiveStringSchema,
  headerField: PrimitiveStringSchema,
  minimumId: PrimitiveStringSchema,
  navigationLinks: PrimitiveBooleanSchema,
  operator: AssertionOperatorTypeSchema,
  path: PrimitiveStringSchema,
  requestMethod: TestScriptRequestMethodCodeSchema,
  requestURL: PrimitiveStringSchema,
  resource: FHIRDefinedTypeSchema,
  response: AssertionResponseTypesSchema,
  responseCode: PrimitiveStringSchema,
  sourceId: PrimitiveIdSchema,
  validateProfileId: PrimitiveIdSchema,
  value: PrimitiveStringSchema,
  warningOnly: PrimitiveBooleanSchema,
});

module.exports.TestScriptSetupActionAssertSchema = TestScriptSetupActionAssertSchema;
