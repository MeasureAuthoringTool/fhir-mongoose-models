const { ElementSchema } = require('./Element');
const { TestReportStatusSchema } = require('./allSchemaHeaders.js');

TestReportStatusSchema.add(ElementSchema);
TestReportStatusSchema.remove('id');
TestReportStatusSchema.add({
  value: String,
});

module.exports.TestReportStatusSchema = TestReportStatusSchema;
