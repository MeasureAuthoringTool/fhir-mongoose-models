const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestScriptSetupActionOperationSchema } = require('./TestScriptSetupActionOperation');

const TestScriptTeardownActionSchema = BackboneElementSchemaFunction({
  operation: TestScriptSetupActionOperationSchema,
  typeName: { type: String, default: 'TestScriptTeardownAction' },
  _type: { type: String, default: 'FHIR::TestScriptTeardownAction' },
});

class TestScriptTeardownAction extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTeardownActionSchema);
    this.typeName = 'TestScriptTeardownAction';
    this._type = 'FHIR::TestScriptTeardownAction';
  }
}

module.exports.TestScriptTeardownActionSchema = TestScriptTeardownActionSchema;
module.exports.TestScriptTeardownAction = TestScriptTeardownAction;
