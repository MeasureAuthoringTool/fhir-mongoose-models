const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExampleScenarioProcessSchema } = require('./ExampleScenarioProcess');
const { ExampleScenarioProcessStepAlternativeSchema } = require('./ExampleScenarioProcessStepAlternative');
const { ExampleScenarioProcessStepOperationSchema } = require('./ExampleScenarioProcessStepOperation');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const ExampleScenarioProcessStepSchema = BackboneElementSchemaFunction({
  process: [ExampleScenarioProcessSchema],
  pause: PrimitiveBooleanSchema,
  operation: ExampleScenarioProcessStepOperationSchema,
  alternative: [ExampleScenarioProcessStepAlternativeSchema],
  typeName: { type: String, default: 'ExampleScenarioProcessStep' },
  _type: { type: String, default: 'FHIR::ExampleScenarioProcessStep' },
});

class ExampleScenarioProcessStep extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessStepSchema);
    this.typeName = 'ExampleScenarioProcessStep';
    this._type = 'FHIR::ExampleScenarioProcessStep';
  }
}

module.exports.ExampleScenarioProcessStepSchema = ExampleScenarioProcessStepSchema;
module.exports.ExampleScenarioProcessStep = ExampleScenarioProcessStep;
