const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExampleScenarioProcessStepSchema } = require('./ExampleScenarioProcessStep');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioProcessStepAlternativeSchema = BackboneElementSchemaFunction({
  title: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  step: [ExampleScenarioProcessStepSchema],
  typeName: { type: String, default: 'ExampleScenarioProcessStepAlternative' },
  _type: { type: String, default: 'FHIR::ExampleScenarioProcessStepAlternative' },
});

class ExampleScenarioProcessStepAlternative extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessStepAlternativeSchema);
    this.typeName = 'ExampleScenarioProcessStepAlternative';
    this._type = 'FHIR::ExampleScenarioProcessStepAlternative';
  }
}

module.exports.ExampleScenarioProcessStepAlternativeSchema = ExampleScenarioProcessStepAlternativeSchema;
module.exports.ExampleScenarioProcessStepAlternative = ExampleScenarioProcessStepAlternative;
