const { BackboneElementSchema } = require('./BackboneElement');
const { EncounterStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { EncounterStatusHistorySchema } = require('./allSchemaHeaders.js');

EncounterStatusHistorySchema.add(BackboneElementSchema);
EncounterStatusHistorySchema.remove('id');
EncounterStatusHistorySchema.add({
  status: EncounterStatusSchema,
  period: PeriodSchema,
});

module.exports.EncounterStatusHistorySchema = EncounterStatusHistorySchema;
