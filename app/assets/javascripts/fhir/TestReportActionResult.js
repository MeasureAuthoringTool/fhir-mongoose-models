const { ElementSchema } = require('./Element');
const { TestReportActionResultSchema } = require('./allSchemaHeaders.js');

TestReportActionResultSchema.add(ElementSchema);
TestReportActionResultSchema.remove('id');
TestReportActionResultSchema.add({
  value: String,
});

module.exports.TestReportActionResultSchema = TestReportActionResultSchema;
