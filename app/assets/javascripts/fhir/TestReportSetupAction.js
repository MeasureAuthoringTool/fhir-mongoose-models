const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionAssertSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupActionOperationSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupActionSchema } = require('./allSchemaHeaders.js');

TestReportSetupActionSchema.add(BackboneElementSchema);
TestReportSetupActionSchema.remove('id');
TestReportSetupActionSchema.add({
  operation: TestReportSetupActionOperationSchema,
  assert: TestReportSetupActionAssertSchema,
});

module.exports.TestReportSetupActionSchema = TestReportSetupActionSchema;
