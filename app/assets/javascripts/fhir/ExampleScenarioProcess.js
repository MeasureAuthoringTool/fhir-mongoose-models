const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioProcessStepSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessSchema } = require('./allSchemaHeaders.js');

ExampleScenarioProcessSchema.add(BackboneElementSchema);
ExampleScenarioProcessSchema.remove('id');
ExampleScenarioProcessSchema.add({
  title: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  preConditions: PrimitiveMarkdownSchema,
  postConditions: PrimitiveMarkdownSchema,
  step: [ExampleScenarioProcessStepSchema],
});

module.exports.ExampleScenarioProcessSchema = ExampleScenarioProcessSchema;
