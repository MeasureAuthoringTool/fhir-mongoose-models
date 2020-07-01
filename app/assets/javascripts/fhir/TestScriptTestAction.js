const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestScriptSetupActionAssertSchema } = require('./TestScriptSetupActionAssert');
const { TestScriptSetupActionOperationSchema } = require('./TestScriptSetupActionOperation');

const TestScriptTestActionSchema = BackboneElementSchemaFunction({
  operation: TestScriptSetupActionOperationSchema,
  assert: TestScriptSetupActionAssertSchema,
  typeName: { type: String, default: 'TestScriptTestAction' },
  _type: { type: String, default: 'FHIR::TestScriptTestAction' },
});

class TestScriptTestAction extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTestActionSchema);
    this.typeName = 'TestScriptTestAction';
    this._type = 'FHIR::TestScriptTestAction';
  }
}

module.exports.TestScriptTestActionSchema = TestScriptTestActionSchema;
module.exports.TestScriptTestAction = TestScriptTestAction;
