const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExampleScenarioActorTypeSchema } = require('./ExampleScenarioActorType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExampleScenarioActorSchema = BackboneElementSchemaFunction({
   actorId : String,
   type : ExampleScenarioActorTypeSchema,
   name : String,
   description : String,
   fhirTitle: { type: String, default: 'ExampleScenarioActor' },
});

class ExampleScenarioActor extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioActorSchema);
    this._type = 'FHIR::ExampleScenarioActor';
  }
};


module.exports.ExampleScenarioActorSchema = ExampleScenarioActorSchema;
module.exports.ExampleScenarioActor = ExampleScenarioActor;
