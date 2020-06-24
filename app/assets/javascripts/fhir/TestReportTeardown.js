const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportTeardownActionSchema } = require('./TestReportTeardownAction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportTeardownSchema = BackboneElementSchemaFunction({
   action : [TestReportTeardownActionSchema],
   fhirTitle: { type: String, default: 'TestReportTeardown' },
});

class TestReportTeardown extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTeardownSchema);
    this._type = 'FHIR::TestReportTeardown';
  }
};


module.exports.TestReportTeardownSchema = TestReportTeardownSchema;
module.exports.TestReportTeardown = TestReportTeardown;
