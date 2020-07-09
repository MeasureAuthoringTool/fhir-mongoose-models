const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { EpisodeOfCareDiagnosisSchema } = require('./allSchemaHeaders.js');
const { EpisodeOfCareStatusSchema } = require('./allSchemaHeaders.js');
const { EpisodeOfCareStatusHistorySchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EpisodeOfCareSchema } = require('./allSchemaHeaders.js');

EpisodeOfCareSchema.add(DomainResourceSchema);
EpisodeOfCareSchema.remove('id');
EpisodeOfCareSchema.add({
  identifier: [IdentifierSchema],
  status: EpisodeOfCareStatusSchema,
  statusHistory: [EpisodeOfCareStatusHistorySchema],
  type: [CodeableConceptSchema],
  diagnosis: [EpisodeOfCareDiagnosisSchema],
  patient: ReferenceSchema,
  managingOrganization: ReferenceSchema,
  period: PeriodSchema,
  referralRequest: [ReferenceSchema],
  careManager: ReferenceSchema,
  team: [ReferenceSchema],
  account: [ReferenceSchema],
});

module.exports.EpisodeOfCareSchema = EpisodeOfCareSchema;
