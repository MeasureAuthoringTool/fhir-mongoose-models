const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ExampleScenarioActorTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ExampleScenarioActorType' },
  _type: { type: String, default: 'FHIR::ExampleScenarioActorType' },
});

class ExampleScenarioActorType extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioActorTypeSchema);
    this.typeName = 'ExampleScenarioActorType';
    this._type = 'FHIR::ExampleScenarioActorType';
  }
}

module.exports.ExampleScenarioActorTypeSchema = ExampleScenarioActorTypeSchema;
module.exports.ExampleScenarioActorType = ExampleScenarioActorType;
