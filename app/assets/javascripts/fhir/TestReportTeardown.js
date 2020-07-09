const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportTeardownActionSchema } = require('./allSchemaHeaders.js');
const { TestReportTeardownSchema } = require('./allSchemaHeaders.js');

TestReportTeardownSchema.add(BackboneElementSchema);
TestReportTeardownSchema.remove('id');
TestReportTeardownSchema.add({
  action: [TestReportTeardownActionSchema],
});

module.exports.TestReportTeardownSchema = TestReportTeardownSchema;
