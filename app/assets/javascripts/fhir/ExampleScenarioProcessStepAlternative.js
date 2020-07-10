const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioProcessStepSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessStepAlternativeSchema } = require('./allSchemaHeaders.js');

ExampleScenarioProcessStepAlternativeSchema.add(BackboneElementSchema);
ExampleScenarioProcessStepAlternativeSchema.remove('id');
ExampleScenarioProcessStepAlternativeSchema.add({
  title: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  step: [ExampleScenarioProcessStepSchema],
});

module.exports.ExampleScenarioProcessStepAlternativeSchema = ExampleScenarioProcessStepAlternativeSchema;
