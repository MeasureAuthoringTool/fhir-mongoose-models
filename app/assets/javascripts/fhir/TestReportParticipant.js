const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { TestReportParticipantTypeSchema } = require('./allSchemaHeaders.js');
const { TestReportParticipantSchema } = require('./allSchemaHeaders.js');

TestReportParticipantSchema.add(BackboneElementSchema);
TestReportParticipantSchema.remove('id');
TestReportParticipantSchema.add({
  type: TestReportParticipantTypeSchema,
  uri: PrimitiveUriSchema,
  display: PrimitiveStringSchema,
});

module.exports.TestReportParticipantSchema = TestReportParticipantSchema;
