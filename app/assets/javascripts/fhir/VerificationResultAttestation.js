const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');

const VerificationResultAttestationSchema = BackboneElementSchemaFunction({
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  communicationMethod: CodeableConceptSchema,
  date: PrimitiveDateSchema,
  sourceIdentityCertificate: PrimitiveStringSchema,
  proxyIdentityCertificate: PrimitiveStringSchema,
  proxySignature: SignatureSchema,
  sourceSignature: SignatureSchema,
  typeName: { type: String, default: 'VerificationResultAttestation' },
  _type: { type: String, default: 'FHIR::VerificationResultAttestation' },
});

class VerificationResultAttestation extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultAttestationSchema);
    this.typeName = 'VerificationResultAttestation';
    this._type = 'FHIR::VerificationResultAttestation';
  }
}

module.exports.VerificationResultAttestationSchema = VerificationResultAttestationSchema;
module.exports.VerificationResultAttestation = VerificationResultAttestation;
