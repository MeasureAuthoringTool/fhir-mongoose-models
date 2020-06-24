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

const ExampleScenarioProcessStepAlternativeSchema = BackboneElementSchemaFunction({
   title : String,
   description : String,
   step : [ExampleScenarioProcessStepSchema],
   fhirTitle: { type: String, default: 'ExampleScenarioProcessStepAlternative' },
});

class ExampleScenarioProcessStepAlternative extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessStepAlternativeSchema);
    this._type = 'FHIR::ExampleScenarioProcessStepAlternative';
  }
};


module.exports.ExampleScenarioProcessStepAlternativeSchema = ExampleScenarioProcessStepAlternativeSchema;
module.exports.ExampleScenarioProcessStepAlternative = ExampleScenarioProcessStepAlternative;
