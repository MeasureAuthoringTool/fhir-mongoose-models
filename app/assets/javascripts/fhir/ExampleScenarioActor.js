const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioActorTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioActorSchema } = require('./allSchemaHeaders.js');

ExampleScenarioActorSchema.add(BackboneElementSchema);
ExampleScenarioActorSchema.remove('id');
ExampleScenarioActorSchema.add({
  actorId: PrimitiveStringSchema,
  type: ExampleScenarioActorTypeSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
});

module.exports.ExampleScenarioActorSchema = ExampleScenarioActorSchema;
