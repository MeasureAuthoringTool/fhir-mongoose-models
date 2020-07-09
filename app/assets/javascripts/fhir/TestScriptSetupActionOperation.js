const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { FHIRDefinedTypeSchema } = require('./allSchemaHeaders.js');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestScriptRequestMethodCodeSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionOperationRequestHeaderSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupActionOperationSchema } = require('./allSchemaHeaders.js');

TestScriptSetupActionOperationSchema.add(BackboneElementSchema);
TestScriptSetupActionOperationSchema.remove('id');
TestScriptSetupActionOperationSchema.add({
  type: CodingSchema,
  resource: FHIRDefinedTypeSchema,
  label: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  accept: MimeTypeSchema,
  contentType: MimeTypeSchema,
  destination: PrimitiveIntegerSchema,
  encodeRequestUrl: PrimitiveBooleanSchema,
  method: TestScriptRequestMethodCodeSchema,
  origin: PrimitiveIntegerSchema,
  params: PrimitiveStringSchema,
  requestHeader: [TestScriptSetupActionOperationRequestHeaderSchema],
  requestId: PrimitiveIdSchema,
  responseId: PrimitiveIdSchema,
  sourceId: PrimitiveIdSchema,
  targetId: PrimitiveIdSchema,
  url: PrimitiveStringSchema,
});

module.exports.TestScriptSetupActionOperationSchema = TestScriptSetupActionOperationSchema;
