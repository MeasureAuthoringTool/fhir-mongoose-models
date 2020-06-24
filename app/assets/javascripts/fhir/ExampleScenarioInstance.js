const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./ExampleScenarioInstanceContainedInstance');
const { ExampleScenarioInstanceVersionSchema } = require('./ExampleScenarioInstanceVersion');
const { FHIRResourceTypeSchema } = require('./FHIRResourceType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioInstanceSchema = BackboneElementSchemaFunction({
   resourceId : String,
   resourceType : FHIRResourceTypeSchema,
   name : String,
   description : String,
   version : [ExampleScenarioInstanceVersionSchema],
   containedInstance : [ExampleScenarioInstanceContainedInstanceSchema],
   fhirTitle: { type: String, default: 'ExampleScenarioInstance' },
});

class ExampleScenarioInstance extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioInstanceSchema);
    this._type = 'FHIR::ExampleScenarioInstance';
  }
};


module.exports.ExampleScenarioInstanceSchema = ExampleScenarioInstanceSchema;
module.exports.ExampleScenarioInstance = ExampleScenarioInstance;
