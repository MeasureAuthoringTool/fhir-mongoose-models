const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioInstanceContainedInstanceSchema = BackboneElementSchemaFunction({
  resourceId: PrimitiveStringSchema,
  versionId: PrimitiveStringSchema,
  typeName: { type: String, default: 'ExampleScenarioInstanceContainedInstance' },
  _type: { type: String, default: 'FHIR::ExampleScenarioInstanceContainedInstance' },
});

class ExampleScenarioInstanceContainedInstance extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioInstanceContainedInstanceSchema);
    this.typeName = 'ExampleScenarioInstanceContainedInstance';
    this._type = 'FHIR::ExampleScenarioInstanceContainedInstance';
  }
}

module.exports.ExampleScenarioInstanceContainedInstanceSchema = ExampleScenarioInstanceContainedInstanceSchema;
module.exports.ExampleScenarioInstanceContainedInstance = ExampleScenarioInstanceContainedInstance;
