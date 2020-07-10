const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TestReportTestActionSchema } = require('./allSchemaHeaders.js');
const { TestReportTestSchema } = require('./allSchemaHeaders.js');

TestReportTestSchema.add(BackboneElementSchema);
TestReportTestSchema.remove('id');
TestReportTestSchema.add({
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  action: [TestReportTestActionSchema],
});

module.exports.TestReportTestSchema = TestReportTestSchema;
