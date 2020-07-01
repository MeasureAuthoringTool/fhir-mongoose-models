const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExampleScenarioInstanceContainedInstanceSchema } = require('./ExampleScenarioInstanceContainedInstance');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExampleScenarioProcessStepOperationSchema = BackboneElementSchemaFunction({
  number: PrimitiveStringSchema,
  type: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  initiator: PrimitiveStringSchema,
  receiver: PrimitiveStringSchema,
  description: PrimitiveMarkdownSchema,
  initiatorActive: PrimitiveBooleanSchema,
  receiverActive: PrimitiveBooleanSchema,
  request: ExampleScenarioInstanceContainedInstanceSchema,
  response: ExampleScenarioInstanceContainedInstanceSchema,
  typeName: { type: String, default: 'ExampleScenarioProcessStepOperation' },
  _type: { type: String, default: 'FHIR::ExampleScenarioProcessStepOperation' },
});

class ExampleScenarioProcessStepOperation extends mongoose.Document {
  constructor(object) {
    super(object, ExampleScenarioProcessStepOperationSchema);
    this.typeName = 'ExampleScenarioProcessStepOperation';
    this._type = 'FHIR::ExampleScenarioProcessStepOperation';
  }
}

module.exports.ExampleScenarioProcessStepOperationSchema = ExampleScenarioProcessStepOperationSchema;
module.exports.ExampleScenarioProcessStepOperation = ExampleScenarioProcessStepOperation;
