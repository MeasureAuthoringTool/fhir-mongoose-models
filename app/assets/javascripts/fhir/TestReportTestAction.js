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

const TestReportTestActionSchema = BackboneElementSchemaFunction({
   operation : TestReportSetupActionOperationSchema,
   assert : TestReportSetupActionAssertSchema,
   fhirTitle: { type: String, default: 'TestReportTestAction' },
});

class TestReportTestAction extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTestActionSchema);
    this._type = 'FHIR::TestReportTestAction';
  }
};


module.exports.TestReportTestActionSchema = TestReportTestActionSchema;
module.exports.TestReportTestAction = TestReportTestAction;
