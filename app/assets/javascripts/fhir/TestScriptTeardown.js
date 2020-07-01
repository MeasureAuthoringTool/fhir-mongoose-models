const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestScriptTeardownActionSchema } = require('./TestScriptTeardownAction');

const TestScriptTeardownSchema = BackboneElementSchemaFunction({
  action: [TestScriptTeardownActionSchema],
  typeName: { type: String, default: 'TestScriptTeardown' },
  _type: { type: String, default: 'FHIR::TestScriptTeardown' },
});

class TestScriptTeardown extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTeardownSchema);
    this.typeName = 'TestScriptTeardown';
    this._type = 'FHIR::TestScriptTeardown';
  }
}

module.exports.TestScriptTeardownSchema = TestScriptTeardownSchema;
module.exports.TestScriptTeardown = TestScriptTeardown;
