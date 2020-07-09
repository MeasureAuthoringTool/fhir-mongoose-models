const { ElementSchema } = require('./Element');
const { ExampleScenarioActorTypeSchema } = require('./allSchemaHeaders.js');

ExampleScenarioActorTypeSchema.add(ElementSchema);
ExampleScenarioActorTypeSchema.remove('id');
ExampleScenarioActorTypeSchema.add({
  value: String,
});

module.exports.ExampleScenarioActorTypeSchema = ExampleScenarioActorTypeSchema;
