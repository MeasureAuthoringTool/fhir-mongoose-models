const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { StatusSchema } = require('./Status');
const { TimingSchema } = require('./Timing');
const { VerificationResultAttestationSchema } = require('./VerificationResultAttestation');
const { VerificationResultPrimarySourceSchema } = require('./VerificationResultPrimarySource');
const { VerificationResultValidatorSchema } = require('./VerificationResultValidator');

const VerificationResultSchema = DomainResourceSchemaFunction({
  target: [ReferenceSchema],
  targetLocation: [PrimitiveStringSchema],
  need: CodeableConceptSchema,
  status: StatusSchema,
  statusDate: PrimitiveDateTimeSchema,
  validationType: CodeableConceptSchema,
  validationProcess: [CodeableConceptSchema],
  frequency: TimingSchema,
  lastPerformed: PrimitiveDateTimeSchema,
  nextScheduled: PrimitiveDateSchema,
  failureAction: CodeableConceptSchema,
  primarySource: [VerificationResultPrimarySourceSchema],
  attestation: VerificationResultAttestationSchema,
  validator: [VerificationResultValidatorSchema],
  typeName: { type: String, default: 'VerificationResult' },
  _type: { type: String, default: 'FHIR::VerificationResult' },
});

class VerificationResult extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultSchema);
    this.typeName = 'VerificationResult';
    this._type = 'FHIR::VerificationResult';
  }
}

module.exports.VerificationResultSchema = VerificationResultSchema;
module.exports.VerificationResult = VerificationResult;
