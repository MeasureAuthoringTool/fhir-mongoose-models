const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestReportSetupActionOperationSchema } = require('./TestReportSetupActionOperation');

const TestReportTeardownActionSchema = BackboneElementSchemaFunction({
  operation: TestReportSetupActionOperationSchema,
  typeName: { type: String, default: 'TestReportTeardownAction' },
  _type: { type: String, default: 'FHIR::TestReportTeardownAction' },
});

class TestReportTeardownAction extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTeardownActionSchema);
    this.typeName = 'TestReportTeardownAction';
    this._type = 'FHIR::TestReportTeardownAction';
  }
}

module.exports.TestReportTeardownActionSchema = TestReportTeardownActionSchema;
module.exports.TestReportTeardownAction = TestReportTeardownAction;
