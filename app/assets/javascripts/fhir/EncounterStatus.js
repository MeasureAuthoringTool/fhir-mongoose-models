const { ElementSchema } = require('./Element');
const { EncounterStatusSchema } = require('./allSchemaHeaders.js');

EncounterStatusSchema.add(ElementSchema);
EncounterStatusSchema.remove('id');
EncounterStatusSchema.add({
  value: String,
});

module.exports.EncounterStatusSchema = EncounterStatusSchema;
