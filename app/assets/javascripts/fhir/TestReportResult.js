const { ElementSchema } = require('./Element');
const { TestReportResultSchema } = require('./allSchemaHeaders.js');

TestReportResultSchema.add(ElementSchema);
TestReportResultSchema.remove('id');
TestReportResultSchema.add({
  value: String,
});

module.exports.TestReportResultSchema = TestReportResultSchema;
