const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { DurationSchema } = require('./Duration');
const { EncounterClassHistorySchema } = require('./EncounterClassHistory');
const { EncounterDiagnosisSchema } = require('./EncounterDiagnosis');
const { EncounterHospitalizationSchema } = require('./EncounterHospitalization');
const { EncounterLocationSchema } = require('./EncounterLocation');
const { EncounterParticipantSchema } = require('./EncounterParticipant');
const { EncounterStatusHistorySchema } = require('./EncounterStatusHistory');
const { EncounterStatusSchema } = require('./EncounterStatus');
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

const EncounterSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EncounterStatusSchema,
   statusHistory : [EncounterStatusHistorySchema],
   class : CodingSchema,
   classHistory : [EncounterClassHistorySchema],
   type : [CodeableConceptSchema],
   serviceType : CodeableConceptSchema,
   priority : CodeableConceptSchema,
   subject : ReferenceSchema,
   episodeOfCare : [ReferenceSchema],
   basedOn : [ReferenceSchema],
   participant : [EncounterParticipantSchema],
   appointment : [ReferenceSchema],
   period : PeriodSchema,
   length : DurationSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   diagnosis : [EncounterDiagnosisSchema],
   account : [ReferenceSchema],
   hospitalization : EncounterHospitalizationSchema,
   location : [EncounterLocationSchema],
   serviceProvider : ReferenceSchema,
   partOf : ReferenceSchema,
   fhirTitle: { type: String, default: 'Encounter' },
});

class Encounter extends mongoose.Document {
  constructor(object) {
    super(object, EncounterSchema);
    this._type = 'FHIR::Encounter';
  }
};


module.exports.EncounterSchema = EncounterSchema;
module.exports.Encounter = Encounter;
