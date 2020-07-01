const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EpisodeOfCareDiagnosisSchema } = require('./EpisodeOfCareDiagnosis');
const { EpisodeOfCareStatusSchema } = require('./EpisodeOfCareStatus');
const { EpisodeOfCareStatusHistorySchema } = require('./EpisodeOfCareStatusHistory');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const EpisodeOfCareSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'EpisodeOfCare' },
  _type: { type: String, default: 'FHIR::EpisodeOfCare' },
});

class EpisodeOfCare extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareSchema);
    this.typeName = 'EpisodeOfCare';
    this._type = 'FHIR::EpisodeOfCare';
  }
}

module.exports.EpisodeOfCareSchema = EpisodeOfCareSchema;
module.exports.EpisodeOfCare = EpisodeOfCare;
