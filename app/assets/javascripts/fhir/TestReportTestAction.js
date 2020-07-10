const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionAssertSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupActionOperationSchema } = require('./allSchemaHeaders.js');
const { TestReportTestActionSchema } = require('./allSchemaHeaders.js');

TestReportTestActionSchema.add(BackboneElementSchema);
TestReportTestActionSchema.remove('id');
TestReportTestActionSchema.add({
  operation: TestReportSetupActionOperationSchema,
  assert: TestReportSetupActionAssertSchema,
});

module.exports.TestReportTestActionSchema = TestReportTestActionSchema;
