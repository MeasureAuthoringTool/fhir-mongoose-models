const { ElementSchema } = require('./Element');
const { ParticipationStatusSchema } = require('./allSchemaHeaders.js');

ParticipationStatusSchema.add(ElementSchema);
ParticipationStatusSchema.remove('id');
ParticipationStatusSchema.add({
  value: String,
});

module.exports.ParticipationStatusSchema = ParticipationStatusSchema;
