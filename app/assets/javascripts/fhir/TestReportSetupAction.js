const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestReportSetupActionAssertSchema } = require('./TestReportSetupActionAssert');
const { TestReportSetupActionOperationSchema } = require('./TestReportSetupActionOperation');

const TestReportSetupActionSchema = BackboneElementSchemaFunction({
  operation: TestReportSetupActionOperationSchema,
  assert: TestReportSetupActionAssertSchema,
  typeName: { type: String, default: 'TestReportSetupAction' },
  _type: { type: String, default: 'FHIR::TestReportSetupAction' },
});

class TestReportSetupAction extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupActionSchema);
    this.typeName = 'TestReportSetupAction';
    this._type = 'FHIR::TestReportSetupAction';
  }
}

module.exports.TestReportSetupActionSchema = TestReportSetupActionSchema;
module.exports.TestReportSetupAction = TestReportSetupAction;
