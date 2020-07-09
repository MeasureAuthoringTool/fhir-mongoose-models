const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { TestReportActionResultSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupActionOperationSchema } = require('./allSchemaHeaders.js');

TestReportSetupActionOperationSchema.add(BackboneElementSchema);
TestReportSetupActionOperationSchema.remove('id');
TestReportSetupActionOperationSchema.add({
  result: TestReportActionResultSchema,
  message: PrimitiveMarkdownSchema,
  detail: PrimitiveUriSchema,
});

module.exports.TestReportSetupActionOperationSchema = TestReportSetupActionOperationSchema;
