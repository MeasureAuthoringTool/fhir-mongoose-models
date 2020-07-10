const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioInstanceVersionSchema } = require('./allSchemaHeaders.js');
const { FHIRResourceTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioInstanceSchema } = require('./allSchemaHeaders.js');

ExampleScenarioInstanceSchema.add(BackboneElementSchema);
ExampleScenarioInstanceSchema.remove('id');
ExampleScenarioInstanceSchema.add({
  resourceId: PrimitiveStringSchema,
  resourceType: FHIRResourceTypeSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  version: [ExampleScenarioInstanceVersionSchema],
  containedInstance: [ExampleScenarioInstanceContainedInstanceSchema],
});

module.exports.ExampleScenarioInstanceSchema = ExampleScenarioInstanceSchema;
