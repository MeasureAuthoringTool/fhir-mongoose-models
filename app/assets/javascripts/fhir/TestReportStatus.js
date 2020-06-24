const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TestReportStatus' },
});

class TestReportStatus extends mongoose.Document {
  constructor(object) {
    super(object, TestReportStatusSchema);
    this._type = 'FHIR::TestReportStatus';
  }
};


module.exports.TestReportStatusSchema = TestReportStatusSchema;
module.exports.TestReportStatus = TestReportStatus;
