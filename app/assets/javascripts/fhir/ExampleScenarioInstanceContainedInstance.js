const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioInstanceContainedInstanceSchema = BackboneElementSchemaFunction({
   resourceId : String,
   versionId : String,
   fhirTitle: { type: String, default: 'ExampleScenarioInstanceContainedInstance' },
});

class ExampleScenarioInstanceContainedInstance extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioInstanceContainedInstanceSchema);
    this._type = 'FHIR::ExampleScenarioInstanceContainedInstance';
  }
};


module.exports.ExampleScenarioInstanceContainedInstanceSchema = ExampleScenarioInstanceContainedInstanceSchema;
module.exports.ExampleScenarioInstanceContainedInstance = ExampleScenarioInstanceContainedInstance;
