const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioInstanceVersionSchema = BackboneElementSchemaFunction({
   versionId : String,
   description : String,
   fhirTitle: { type: String, default: 'ExampleScenarioInstanceVersion' },
});

class ExampleScenarioInstanceVersion extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioInstanceVersionSchema);
    this._type = 'FHIR::ExampleScenarioInstanceVersion';
  }
};


module.exports.ExampleScenarioInstanceVersionSchema = ExampleScenarioInstanceVersionSchema;
module.exports.ExampleScenarioInstanceVersion = ExampleScenarioInstanceVersion;
