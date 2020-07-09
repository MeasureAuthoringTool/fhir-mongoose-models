const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TestReportParticipantSchema } = require('./allSchemaHeaders.js');
const { TestReportResultSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupSchema } = require('./allSchemaHeaders.js');
const { TestReportStatusSchema } = require('./allSchemaHeaders.js');
const { TestReportTeardownSchema } = require('./allSchemaHeaders.js');
const { TestReportTestSchema } = require('./allSchemaHeaders.js');
const { TestReportSchema } = require('./allSchemaHeaders.js');

TestReportSchema.add(DomainResourceSchema);
TestReportSchema.remove('id');
TestReportSchema.add({
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
});

module.exports.TestReportSchema = TestReportSchema;
