const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionSchema } = require('./TestReportSetupAction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportSetupSchema = BackboneElementSchemaFunction({
   action : [TestReportSetupActionSchema],
   fhirTitle: { type: String, default: 'TestReportSetup' },
});

class TestReportSetup extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupSchema);
    this._type = 'FHIR::TestReportSetup';
  }
};


module.exports.TestReportSetupSchema = TestReportSetupSchema;
module.exports.TestReportSetup = TestReportSetup;
