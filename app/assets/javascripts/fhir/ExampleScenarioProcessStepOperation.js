const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./ExampleScenarioInstanceContainedInstance');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioProcessStepOperationSchema = BackboneElementSchemaFunction({
   number : String,
   type : String,
   name : String,
   initiator : String,
   receiver : String,
   description : String,
   initiatorActive : Boolean,
   receiverActive : Boolean,
   request : ExampleScenarioInstanceContainedInstanceSchema,
   response : ExampleScenarioInstanceContainedInstanceSchema,
   fhirTitle: { type: String, default: 'ExampleScenarioProcessStepOperation' },
});

class ExampleScenarioProcessStepOperation extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessStepOperationSchema);
    this._type = 'FHIR::ExampleScenarioProcessStepOperation';
  }
};


module.exports.ExampleScenarioProcessStepOperationSchema = ExampleScenarioProcessStepOperationSchema;
module.exports.ExampleScenarioProcessStepOperation = ExampleScenarioProcessStepOperation;
