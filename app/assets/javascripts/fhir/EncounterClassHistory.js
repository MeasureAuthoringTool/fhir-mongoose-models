const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { EncounterClassHistorySchema } = require('./allSchemaHeaders.js');

EncounterClassHistorySchema.add(BackboneElementSchema);
EncounterClassHistorySchema.remove('id');
EncounterClassHistorySchema.add({
  class: CodingSchema,
  period: PeriodSchema,
});

module.exports.EncounterClassHistorySchema = EncounterClassHistorySchema;
