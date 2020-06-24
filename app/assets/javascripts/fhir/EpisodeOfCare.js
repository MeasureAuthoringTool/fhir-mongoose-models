const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { EpisodeOfCareDiagnosisSchema } = require('./EpisodeOfCareDiagnosis');
const { EpisodeOfCareStatusHistorySchema } = require('./EpisodeOfCareStatusHistory');
const { EpisodeOfCareStatusSchema } = require('./EpisodeOfCareStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EpisodeOfCareSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EpisodeOfCareStatusSchema,
   statusHistory : [EpisodeOfCareStatusHistorySchema],
   type : [CodeableConceptSchema],
   diagnosis : [EpisodeOfCareDiagnosisSchema],
   patient : ReferenceSchema,
   managingOrganization : ReferenceSchema,
   period : PeriodSchema,
   referralRequest : [ReferenceSchema],
   careManager : ReferenceSchema,
   team : [ReferenceSchema],
   account : [ReferenceSchema],
   fhirTitle: { type: String, default: 'EpisodeOfCare' },
});

class EpisodeOfCare extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareSchema);
    this._type = 'FHIR::EpisodeOfCare';
  }
};


module.exports.EpisodeOfCareSchema = EpisodeOfCareSchema;
module.exports.EpisodeOfCare = EpisodeOfCare;
