const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioActorTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ExampleScenarioActorType' },
});

class ExampleScenarioActorType extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioActorTypeSchema);
    this._type = 'FHIR::ExampleScenarioActorType';
  }
};


module.exports.ExampleScenarioActorTypeSchema = ExampleScenarioActorTypeSchema;
module.exports.ExampleScenarioActorType = ExampleScenarioActorType;
