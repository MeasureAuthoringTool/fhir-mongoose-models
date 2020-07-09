const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionOperationSchema } = require('./allSchemaHeaders.js');
const { TestReportTeardownActionSchema } = require('./allSchemaHeaders.js');

TestReportTeardownActionSchema.add(BackboneElementSchema);
TestReportTeardownActionSchema.remove('id');
TestReportTeardownActionSchema.add({
  operation: TestReportSetupActionOperationSchema,
});

module.exports.TestReportTeardownActionSchema = TestReportTeardownActionSchema;
