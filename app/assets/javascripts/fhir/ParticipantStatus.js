const { ElementSchema } = require('./Element');
const { ParticipantStatusSchema } = require('./allSchemaHeaders.js');

ParticipantStatusSchema.add(ElementSchema);
ParticipantStatusSchema.remove('id');
ParticipantStatusSchema.add({
  value: String,
});

module.exports.ParticipantStatusSchema = ParticipantStatusSchema;
