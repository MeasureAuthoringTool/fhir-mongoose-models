const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessStepOperationSchema } = require('./allSchemaHeaders.js');

ExampleScenarioProcessStepOperationSchema.add(BackboneElementSchema);
ExampleScenarioProcessStepOperationSchema.remove('id');
ExampleScenarioProcessStepOperationSchema.add({
  number: PrimitiveStringSchema,
  type: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  initiator: PrimitiveStringSchema,
  receiver: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  initiatorActive: PrimitiveBooleanSchema,
  receiverActive: PrimitiveBooleanSchema,
  request: ExampleScenarioInstanceContainedInstanceSchema,
  response: ExampleScenarioInstanceContainedInstanceSchema,
});

module.exports.ExampleScenarioProcessStepOperationSchema = ExampleScenarioProcessStepOperationSchema;
