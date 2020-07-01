const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestScriptSetupActionSchema } = require('./TestScriptSetupAction');

const TestScriptSetupSchema = BackboneElementSchemaFunction({
  action: [TestScriptSetupActionSchema],
  typeName: { type: String, default: 'TestScriptSetup' },
  _type: { type: String, default: 'FHIR::TestScriptSetup' },
});

class TestScriptSetup extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupSchema);
    this.typeName = 'TestScriptSetup';
    this._type = 'FHIR::TestScriptSetup';
  }
}

module.exports.TestScriptSetupSchema = TestScriptSetupSchema;
module.exports.TestScriptSetup = TestScriptSetup;
