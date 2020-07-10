const { ElementSchema } = require('./Element');
const { ActivityParticipantTypeSchema } = require('./allSchemaHeaders.js');

ActivityParticipantTypeSchema.add(ElementSchema);
ActivityParticipantTypeSchema.remove('id');
ActivityParticipantTypeSchema.add({
  value: String,
});

module.exports.ActivityParticipantTypeSchema = ActivityParticipantTypeSchema;
