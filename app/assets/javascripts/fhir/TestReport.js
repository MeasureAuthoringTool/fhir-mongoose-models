const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { TestReportParticipantSchema } = require('./TestReportParticipant');
const { TestReportResultSchema } = require('./TestReportResult');
const { TestReportSetupSchema } = require('./TestReportSetup');
const { TestReportStatusSchema } = require('./TestReportStatus');
const { TestReportTeardownSchema } = require('./TestReportTeardown');
const { TestReportTestSchema } = require('./TestReportTest');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   name : String,
   status : TestReportStatusSchema,
   testScript : ReferenceSchema,
   result : TestReportResultSchema,
   score : Number,
   tester : String,
   issued : DateTime,
   participant : [TestReportParticipantSchema],
   setup : TestReportSetupSchema,
   test : [TestReportTestSchema],
   teardown : TestReportTeardownSchema,
   fhirTitle: { type: String, default: 'TestReport' },
});

class TestReport extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSchema);
    this._type = 'FHIR::TestReport';
  }
};


module.exports.TestReportSchema = TestReportSchema;
module.exports.TestReport = TestReport;
