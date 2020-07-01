const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestScriptSetupActionAssertSchema } = require('./TestScriptSetupActionAssert');
const { TestScriptSetupActionOperationSchema } = require('./TestScriptSetupActionOperation');

const TestScriptSetupActionSchema = BackboneElementSchemaFunction({
  operation: TestScriptSetupActionOperationSchema,
  assert: TestScriptSetupActionAssertSchema,
  typeName: { type: String, default: 'TestScriptSetupAction' },
  _type: { type: String, default: 'FHIR::TestScriptSetupAction' },
});

class TestScriptSetupAction extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionSchema);
    this.typeName = 'TestScriptSetupAction';
    this._type = 'FHIR::TestScriptSetupAction';
  }
}

module.exports.TestScriptSetupActionSchema = TestScriptSetupActionSchema;
module.exports.TestScriptSetupAction = TestScriptSetupAction;
