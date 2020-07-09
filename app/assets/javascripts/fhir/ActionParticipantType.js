const { ElementSchema } = require('./Element');
const { ActionParticipantTypeSchema } = require('./allSchemaHeaders.js');

ActionParticipantTypeSchema.add(ElementSchema);
ActionParticipantTypeSchema.remove('id');
ActionParticipantTypeSchema.add({
  value: String,
});

module.exports.ActionParticipantTypeSchema = ActionParticipantTypeSchema;
