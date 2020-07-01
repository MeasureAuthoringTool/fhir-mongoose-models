const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TestReportActionResultSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TestReportActionResult' },
  _type: { type: String, default: 'FHIR::TestReportActionResult' },
});

class TestReportActionResult extends mongoose.Document {
  constructor(object) {
    super(object, TestReportActionResultSchema);
    this.typeName = 'TestReportActionResult';
    this._type = 'FHIR::TestReportActionResult';
  }
}

module.exports.TestReportActionResultSchema = TestReportActionResultSchema;
module.exports.TestReportActionResult = TestReportActionResult;
