const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionOperationSchema } = require('./TestReportSetupActionOperation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportTeardownActionSchema = BackboneElementSchemaFunction({
   operation : TestReportSetupActionOperationSchema,
   fhirTitle: { type: String, default: 'TestReportTeardownAction' },
});

class TestReportTeardownAction extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTeardownActionSchema);
    this._type = 'FHIR::TestReportTeardownAction';
  }
};


module.exports.TestReportTeardownActionSchema = TestReportTeardownActionSchema;
module.exports.TestReportTeardownAction = TestReportTeardownAction;
