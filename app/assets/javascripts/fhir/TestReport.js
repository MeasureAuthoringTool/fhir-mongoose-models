const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { TestReportParticipantSchema } = require('./TestReportParticipant');
const { TestReportResultSchema } = require('./TestReportResult');
const { TestReportSetupSchema } = require('./TestReportSetup');
const { TestReportStatusSchema } = require('./TestReportStatus');
const { TestReportTeardownSchema } = require('./TestReportTeardown');
const { TestReportTestSchema } = require('./TestReportTest');

const TestReportSchema = DomainResourceSchemaFunction({
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  status: TestReportStatusSchema,
  testScript: ReferenceSchema,
  result: TestReportResultSchema,
  score: PrimitiveDecimalSchema,
  tester: PrimitiveStringSchema,
  issued: PrimitiveDateTimeSchema,
  participant: [TestReportParticipantSchema],
  setup: TestReportSetupSchema,
  test: [TestReportTestSchema],
  teardown: TestReportTeardownSchema,
  typeName: { type: String, default: 'TestReport' },
  _type: { type: String, default: 'FHIR::TestReport' },
});

class TestReport extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSchema);
    this.typeName = 'TestReport';
    this._type = 'FHIR::TestReport';
  }
}

module.exports.TestReportSchema = TestReportSchema;
module.exports.TestReport = TestReport;
