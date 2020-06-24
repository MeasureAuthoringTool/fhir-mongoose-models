const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportActionResultSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TestReportActionResult' },
});

class TestReportActionResult extends mongoose.Document {
  constructor(object) {
    super(object, TestReportActionResultSchema);
    this._type = 'FHIR::TestReportActionResult';
  }
};


module.exports.TestReportActionResultSchema = TestReportActionResultSchema;
module.exports.TestReportActionResult = TestReportActionResult;
