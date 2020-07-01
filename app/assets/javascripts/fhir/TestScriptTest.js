const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TestScriptTestActionSchema } = require('./TestScriptTestAction');

const TestScriptTestSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  action: [TestScriptTestActionSchema],
  typeName: { type: String, default: 'TestScriptTest' },
  _type: { type: String, default: 'FHIR::TestScriptTest' },
});

class TestScriptTest extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTestSchema);
    this.typeName = 'TestScriptTest';
    this._type = 'FHIR::TestScriptTest';
  }
}

module.exports.TestScriptTestSchema = TestScriptTestSchema;
module.exports.TestScriptTest = TestScriptTest;
