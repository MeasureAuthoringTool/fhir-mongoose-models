const { ElementSchema } = require('./Element');
const { TestReportParticipantTypeSchema } = require('./allSchemaHeaders.js');

TestReportParticipantTypeSchema.add(ElementSchema);
TestReportParticipantTypeSchema.remove('id');
TestReportParticipantTypeSchema.add({
  value: String,
});

module.exports.TestReportParticipantTypeSchema = TestReportParticipantTypeSchema;
