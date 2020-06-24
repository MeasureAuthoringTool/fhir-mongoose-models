const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportResultSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TestReportResult' },
});

class TestReportResult extends mongoose.Document {
  constructor(object) {
    super(object, TestReportResultSchema);
    this._type = 'FHIR::TestReportResult';
  }
};


module.exports.TestReportResultSchema = TestReportResultSchema;
module.exports.TestReportResult = TestReportResult;
