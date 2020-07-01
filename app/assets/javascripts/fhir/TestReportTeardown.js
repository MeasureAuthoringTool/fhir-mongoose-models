const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { TestReportTeardownActionSchema } = require('./TestReportTeardownAction');

const TestReportTeardownSchema = BackboneElementSchemaFunction({
  action: [TestReportTeardownActionSchema],
  typeName: { type: String, default: 'TestReportTeardown' },
  _type: { type: String, default: 'FHIR::TestReportTeardown' },
});

class TestReportTeardown extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTeardownSchema);
    this.typeName = 'TestReportTeardown';
    this._type = 'FHIR::TestReportTeardown';
  }
}

module.exports.TestReportTeardownSchema = TestReportTeardownSchema;
module.exports.TestReportTeardown = TestReportTeardown;
