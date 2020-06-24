const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportActionResultSchema } = require('./TestReportActionResult');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportSetupActionOperationSchema = BackboneElementSchemaFunction({
   result : TestReportActionResultSchema,
   message : String,
   detail : String,
   fhirTitle: { type: String, default: 'TestReportSetupActionOperation' },
});

class TestReportSetupActionOperation extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupActionOperationSchema);
    this._type = 'FHIR::TestReportSetupActionOperation';
  }
};


module.exports.TestReportSetupActionOperationSchema = TestReportSetupActionOperationSchema;
module.exports.TestReportSetupActionOperation = TestReportSetupActionOperation;
