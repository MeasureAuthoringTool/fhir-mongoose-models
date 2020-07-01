const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestReportSetupActionAssertSchema } = require('./TestReportSetupActionAssert');
const { TestReportSetupActionOperationSchema } = require('./TestReportSetupActionOperation');

const TestReportTestActionSchema = BackboneElementSchemaFunction({
  operation: TestReportSetupActionOperationSchema,
  assert: TestReportSetupActionAssertSchema,
  typeName: { type: String, default: 'TestReportTestAction' },
  _type: { type: String, default: 'FHIR::TestReportTestAction' },
});

class TestReportTestAction extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTestActionSchema);
    this.typeName = 'TestReportTestAction';
    this._type = 'FHIR::TestReportTestAction';
  }
}

module.exports.TestReportTestActionSchema = TestReportTestActionSchema;
module.exports.TestReportTestAction = TestReportTestAction;
