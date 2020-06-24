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

const TestReportSetupActionAssertSchema = BackboneElementSchemaFunction({
   result : TestReportActionResultSchema,
   message : String,
   detail : String,
   fhirTitle: { type: String, default: 'TestReportSetupActionAssert' },
});

class TestReportSetupActionAssert extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupActionAssertSchema);
    this._type = 'FHIR::TestReportSetupActionAssert';
  }
};


module.exports.TestReportSetupActionAssertSchema = TestReportSetupActionAssertSchema;
module.exports.TestReportSetupActionAssert = TestReportSetupActionAssert;
