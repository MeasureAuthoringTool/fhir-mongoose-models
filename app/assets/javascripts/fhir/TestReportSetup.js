const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportSetupActionSchema } = require('./allSchemaHeaders.js');
const { TestReportSetupSchema } = require('./allSchemaHeaders.js');

TestReportSetupSchema.add(BackboneElementSchema);
TestReportSetupSchema.remove('id');
TestReportSetupSchema.add({
  action: [TestReportSetupActionSchema],
});

module.exports.TestReportSetupSchema = TestReportSetupSchema;
