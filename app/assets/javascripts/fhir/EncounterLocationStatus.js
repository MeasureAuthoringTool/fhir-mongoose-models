const { ElementSchema } = require('./Element');
const { EncounterLocationStatusSchema } = require('./allSchemaHeaders.js');

EncounterLocationStatusSchema.add(ElementSchema);
EncounterLocationStatusSchema.remove('id');
EncounterLocationStatusSchema.add({
  value: String,
});

module.exports.EncounterLocationStatusSchema = EncounterLocationStatusSchema;
