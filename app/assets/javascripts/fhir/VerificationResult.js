const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { ReferenceSchema } = require('./Reference');
const { StatusSchema } = require('./Status');
const { TimingSchema } = require('./Timing');
const { VerificationResultAttestationSchema } = require('./VerificationResultAttestation');
const { VerificationResultPrimarySourceSchema } = require('./VerificationResultPrimarySource');
const { VerificationResultValidatorSchema } = require('./VerificationResultValidator');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VerificationResultSchema = DomainResourceSchemaFunction({
   target : [ReferenceSchema],
   targetLocation : [String],
   need : CodeableConceptSchema,
   status : StatusSchema,
   statusDate : DateTime,
   validationType : CodeableConceptSchema,
   validationProcess : [CodeableConceptSchema],
   frequency : TimingSchema,
   lastPerformed : DateTime,
   nextScheduled : FHIRDate,
   failureAction : CodeableConceptSchema,
   primarySource : [VerificationResultPrimarySourceSchema],
   attestation : VerificationResultAttestationSchema,
   validator : [VerificationResultValidatorSchema],
   fhirTitle: { type: String, default: 'VerificationResult' },
});

class VerificationResult extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultSchema);
    this._type = 'FHIR::VerificationResult';
  }
};


module.exports.VerificationResultSchema = VerificationResultSchema;
module.exports.VerificationResult = VerificationResult;
