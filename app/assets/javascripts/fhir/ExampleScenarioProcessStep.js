const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioProcessSchema } = require('./ExampleScenarioProcess');
const { ExampleScenarioProcessStepAlternativeSchema } = require('./ExampleScenarioProcessStepAlternative');
const { ExampleScenarioProcessStepOperationSchema } = require('./ExampleScenarioProcessStepOperation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioProcessStepSchema = BackboneElementSchemaFunction({
   process : [ExampleScenarioProcessSchema],
   pause : Boolean,
   operation : ExampleScenarioProcessStepOperationSchema,
   alternative : [ExampleScenarioProcessStepAlternativeSchema],
   fhirTitle: { type: String, default: 'ExampleScenarioProcessStep' },
});

class ExampleScenarioProcessStep extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessStepSchema);
    this._type = 'FHIR::ExampleScenarioProcessStep';
  }
};


module.exports.ExampleScenarioProcessStepSchema = ExampleScenarioProcessStepSchema;
module.exports.ExampleScenarioProcessStep = ExampleScenarioProcessStep;
