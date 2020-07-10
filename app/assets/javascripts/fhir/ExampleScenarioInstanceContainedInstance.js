const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./allSchemaHeaders.js');

ExampleScenarioInstanceContainedInstanceSchema.add(BackboneElementSchema);
ExampleScenarioInstanceContainedInstanceSchema.remove('id');
ExampleScenarioInstanceContainedInstanceSchema.add({
  resourceId: PrimitiveStringSchema,
  versionId: PrimitiveStringSchema,
});

module.exports.ExampleScenarioInstanceContainedInstanceSchema = ExampleScenarioInstanceContainedInstanceSchema;
