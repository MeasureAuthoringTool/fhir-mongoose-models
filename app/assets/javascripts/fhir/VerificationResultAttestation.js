const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VerificationResultAttestationSchema = BackboneElementSchemaFunction({
   who : ReferenceSchema,
   onBehalfOf : ReferenceSchema,
   communicationMethod : CodeableConceptSchema,
   date : FHIRDate,
   sourceIdentityCertificate : String,
   proxyIdentityCertificate : String,
   proxySignature : SignatureSchema,
   sourceSignature : SignatureSchema,
   fhirTitle: { type: String, default: 'VerificationResultAttestation' },
});

class VerificationResultAttestation extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultAttestationSchema);
    this._type = 'FHIR::VerificationResultAttestation';
  }
};


module.exports.VerificationResultAttestationSchema = VerificationResultAttestationSchema;
module.exports.VerificationResultAttestation = VerificationResultAttestation;
