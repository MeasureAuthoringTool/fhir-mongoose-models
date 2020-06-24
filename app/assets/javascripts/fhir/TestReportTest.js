const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportTestActionSchema } = require('./TestReportTestAction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportTestSchema = BackboneElementSchemaFunction({
   name : String,
   description : String,
   action : [TestReportTestActionSchema],
   fhirTitle: { type: String, default: 'TestReportTest' },
});

class TestReportTest extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTestSchema);
    this._type = 'FHIR::TestReportTest';
  }
};


module.exports.TestReportTestSchema = TestReportTestSchema;
module.exports.TestReportTest = TestReportTest;
