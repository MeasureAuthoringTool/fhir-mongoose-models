const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioInstanceVersionSchema } = require('./allSchemaHeaders.js');

ExampleScenarioInstanceVersionSchema.add(BackboneElementSchema);
ExampleScenarioInstanceVersionSchema.remove('id');
ExampleScenarioInstanceVersionSchema.add({
  versionId: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
});

module.exports.ExampleScenarioInstanceVersionSchema = ExampleScenarioInstanceVersionSchema;
