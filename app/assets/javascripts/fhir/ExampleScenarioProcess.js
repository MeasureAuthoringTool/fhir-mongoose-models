const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExampleScenarioProcessStepSchema } = require('./ExampleScenarioProcessStep');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioProcessSchema = BackboneElementSchemaFunction({
  title: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  preConditions: PrimitiveMarkdownSchema,
  postConditions: PrimitiveMarkdownSchema,
  step: [ExampleScenarioProcessStepSchema],
  typeName: { type: String, default: 'ExampleScenarioProcess' },
  _type: { type: String, default: 'FHIR::ExampleScenarioProcess' },
});

class ExampleScenarioProcess extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessSchema);
    this.typeName = 'ExampleScenarioProcess';
    this._type = 'FHIR::ExampleScenarioProcess';
  }
}

module.exports.ExampleScenarioProcessSchema = ExampleScenarioProcessSchema;
module.exports.ExampleScenarioProcess = ExampleScenarioProcess;
