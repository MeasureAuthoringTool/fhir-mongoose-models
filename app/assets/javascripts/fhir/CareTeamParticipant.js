const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CareTeamParticipantSchema } = require('./allSchemaHeaders.js');

CareTeamParticipantSchema.add(BackboneElementSchema);
CareTeamParticipantSchema.remove('id');
CareTeamParticipantSchema.add({
  role: [CodeableConceptSchema],
  member: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  period: PeriodSchema,
});

module.exports.CareTeamParticipantSchema = CareTeamParticipantSchema;
