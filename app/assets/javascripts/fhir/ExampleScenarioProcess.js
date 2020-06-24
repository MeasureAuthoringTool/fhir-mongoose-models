const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioProcessStepSchema } = require('./ExampleScenarioProcessStep');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioProcessSchema = BackboneElementSchemaFunction({
   title : String,
   description : String,
   preConditions : String,
   postConditions : String,
   step : [ExampleScenarioProcessStepSchema],
   fhirTitle: { type: String, default: 'ExampleScenarioProcess' },
});

class ExampleScenarioProcess extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessSchema);
    this._type = 'FHIR::ExampleScenarioProcess';
  }
};


module.exports.ExampleScenarioProcessSchema = ExampleScenarioProcessSchema;
module.exports.ExampleScenarioProcess = ExampleScenarioProcess;
