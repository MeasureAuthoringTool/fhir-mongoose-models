const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EncounterParticipantSchema } = require('./allSchemaHeaders.js');

EncounterParticipantSchema.add(BackboneElementSchema);
EncounterParticipantSchema.remove('id');
EncounterParticipantSchema.add({
  type: [CodeableConceptSchema],
  period: PeriodSchema,
  individual: ReferenceSchema,
});

module.exports.EncounterParticipantSchema = EncounterParticipantSchema;
