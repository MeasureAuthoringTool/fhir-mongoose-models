const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExampleScenarioActorTypeSchema } = require('./ExampleScenarioActorType');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioActorSchema = BackboneElementSchemaFunction({
  actorId: PrimitiveStringSchema,
  type: ExampleScenarioActorTypeSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'ExampleScenarioActor' },
  _type: { type: String, default: 'FHIR::ExampleScenarioActor' },
});

class ExampleScenarioActor extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioActorSchema);
    this.typeName = 'ExampleScenarioActor';
    this._type = 'FHIR::ExampleScenarioActor';
  }
}

module.exports.ExampleScenarioActorSchema = ExampleScenarioActorSchema;
module.exports.ExampleScenarioActor = ExampleScenarioActor;
