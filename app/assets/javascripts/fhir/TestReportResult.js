const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TestReportResultSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TestReportResult' },
  _type: { type: String, default: 'FHIR::TestReportResult' },
});

class TestReportResult extends mongoose.Document {
  constructor(object) {
    super(object, TestReportResultSchema);
    this.typeName = 'TestReportResult';
    this._type = 'FHIR::TestReportResult';
  }
}

module.exports.TestReportResultSchema = TestReportResultSchema;
module.exports.TestReportResult = TestReportResult;
