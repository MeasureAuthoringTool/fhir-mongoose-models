const { ElementSchema } = require('./Element');
const { ParticipantRequiredSchema } = require('./allSchemaHeaders.js');

ParticipantRequiredSchema.add(ElementSchema);
ParticipantRequiredSchema.remove('id');
ParticipantRequiredSchema.add({
  value: String,
});

module.exports.ParticipantRequiredSchema = ParticipantRequiredSchema;
