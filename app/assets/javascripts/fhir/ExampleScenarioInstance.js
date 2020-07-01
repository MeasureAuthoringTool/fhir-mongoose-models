const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./ExampleScenarioInstanceContainedInstance');
const { ExampleScenarioInstanceVersionSchema } = require('./ExampleScenarioInstanceVersion');
const { FHIRResourceTypeSchema } = require('./FHIRResourceType');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioInstanceSchema = BackboneElementSchemaFunction({
  resourceId: PrimitiveStringSchema,
  resourceType: FHIRResourceTypeSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  version: [ExampleScenarioInstanceVersionSchema],
  containedInstance: [ExampleScenarioInstanceContainedInstanceSchema],
  typeName: { type: String, default: 'ExampleScenarioInstance' },
  _type: { type: String, default: 'FHIR::ExampleScenarioInstance' },
});

class ExampleScenarioInstance extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioInstanceSchema);
    this.typeName = 'ExampleScenarioInstance';
    this._type = 'FHIR::ExampleScenarioInstance';
  }
}

module.exports.ExampleScenarioInstanceSchema = ExampleScenarioInstanceSchema;
module.exports.ExampleScenarioInstance = ExampleScenarioInstance;
