const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TestReportStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TestReportStatus' },
  _type: { type: String, default: 'FHIR::TestReportStatus' },
});

class TestReportStatus extends mongoose.Document {
  constructor(object) {
    super(object, TestReportStatusSchema);
    this.typeName = 'TestReportStatus';
    this._type = 'FHIR::TestReportStatus';
  }
}

module.exports.TestReportStatusSchema = TestReportStatusSchema;
module.exports.TestReportStatus = TestReportStatus;
