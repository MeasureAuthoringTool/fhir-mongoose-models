const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioProcessSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessStepAlternativeSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessStepOperationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessStepSchema } = require('./allSchemaHeaders.js');

ExampleScenarioProcessStepSchema.add(BackboneElementSchema);
ExampleScenarioProcessStepSchema.remove('id');
ExampleScenarioProcessStepSchema.add({
  process: [ExampleScenarioProcessSchema],
  pause: PrimitiveBooleanSchema,
  operation: ExampleScenarioProcessStepOperationSchema,
  alternative: [ExampleScenarioProcessStepAlternativeSchema],
});

module.exports.ExampleScenarioProcessStepSchema = ExampleScenarioProcessStepSchema;
