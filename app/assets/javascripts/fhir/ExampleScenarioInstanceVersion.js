const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioInstanceVersionSchema = BackboneElementSchemaFunction({
  versionId: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'ExampleScenarioInstanceVersion' },
  _type: { type: String, default: 'FHIR::ExampleScenarioInstanceVersion' },
});

class ExampleScenarioInstanceVersion extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioInstanceVersionSchema);
    this.typeName = 'ExampleScenarioInstanceVersion';
    this._type = 'FHIR::ExampleScenarioInstanceVersion';
  }
}

module.exports.ExampleScenarioInstanceVersionSchema = ExampleScenarioInstanceVersionSchema;
module.exports.ExampleScenarioInstanceVersion = ExampleScenarioInstanceVersion;
