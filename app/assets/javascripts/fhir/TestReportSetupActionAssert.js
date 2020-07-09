const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestReportActionResultSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupActionAssertSchema } = require('./allSchemaHeaders.js');

TestReportSetupActionAssertSchema.add(BackboneElementSchema);
TestReportSetupActionAssertSchema.remove('id');
TestReportSetupActionAssertSchema.add({
  result: TestReportActionResultSchema,
  message: PrimitiveMarkdownSchema,
  detail: PrimitiveStringSchema,
});

module.exports.TestReportSetupActionAssertSchema = TestReportSetupActionAssertSchema;
