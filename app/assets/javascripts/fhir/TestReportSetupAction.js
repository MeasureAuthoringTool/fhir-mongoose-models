const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionAssertSchema } = require('./TestReportSetupActionAssert');
const { TestReportSetupActionOperationSchema } = require('./TestReportSetupActionOperation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportSetupActionSchema = BackboneElementSchemaFunction({
   operation : TestReportSetupActionOperationSchema,
   assert : TestReportSetupActionAssertSchema,
   fhirTitle: { type: String, default: 'TestReportSetupAction' },
});

class TestReportSetupAction extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupActionSchema);
    this._type = 'FHIR::TestReportSetupAction';
  }
};


module.exports.TestReportSetupActionSchema = TestReportSetupActionSchema;
module.exports.TestReportSetupAction = TestReportSetupAction;
