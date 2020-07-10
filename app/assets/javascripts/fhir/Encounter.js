const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { EncounterClassHistorySchema } = require('./allSchemaHeaders.js');
const { EncounterDiagnosisSchema } = require('./allSchemaHeaders.js');
const { EncounterHospitalizationSchema } = require('./allSchemaHeaders.js');
const { EncounterLocationSchema } = require('./allSchemaHeaders.js');
const { EncounterParticipantSchema } = require('./allSchemaHeaders.js');
const { EncounterStatusSchema } = require('./allSchemaHeaders.js');
const { EncounterStatusHistorySchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EncounterSchema } = require('./allSchemaHeaders.js');

EncounterSchema.add(DomainResourceSchema);
EncounterSchema.remove('id');
EncounterSchema.add({
  identifier: [IdentifierSchema],
  status: EncounterStatusSchema,
  statusHistory: [EncounterStatusHistorySchema],
  class: CodingSchema,
  classHistory: [EncounterClassHistorySchema],
  type: [CodeableConceptSchema],
  serviceType: CodeableConceptSchema,
  priority: CodeableConceptSchema,
  subject: ReferenceSchema,
  episodeOfCare: [ReferenceSchema],
  basedOn: [ReferenceSchema],
  participant: [EncounterParticipantSchema],
  appointment: [ReferenceSchema],
  period: PeriodSchema,
  length: DurationSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  diagnosis: [EncounterDiagnosisSchema],
  account: [ReferenceSchema],
  hospitalization: EncounterHospitalizationSchema,
  location: [EncounterLocationSchema],
  serviceProvider: ReferenceSchema,
  partOf: ReferenceSchema,
});

module.exports.EncounterSchema = EncounterSchema;
