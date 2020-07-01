const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestReportSetupActionSchema } = require('./TestReportSetupAction');

const TestReportSetupSchema = BackboneElementSchemaFunction({
  action: [TestReportSetupActionSchema],
  typeName: { type: String, default: 'TestReportSetup' },
  _type: { type: String, default: 'FHIR::TestReportSetup' },
});

class TestReportSetup extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupSchema);
    this.typeName = 'TestReportSetup';
    this._type = 'FHIR::TestReportSetup';
  }
}

module.exports.TestReportSetupSchema = TestReportSetupSchema;
module.exports.TestReportSetup = TestReportSetup;
