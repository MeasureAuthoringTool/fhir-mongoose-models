const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');

const VerificationResultValidatorSchema = BackboneElementSchemaFunction({
  organization: ReferenceSchema,
  identityCertificate: PrimitiveStringSchema,
  attestationSignature: SignatureSchema,
  typeName: { type: String, default: 'VerificationResultValidator' },
  _type: { type: String, default: 'FHIR::VerificationResultValidator' },
});

class VerificationResultValidator extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultValidatorSchema);
    this.typeName = 'VerificationResultValidator';
    this._type = 'FHIR::VerificationResultValidator';
  }
}

module.exports.VerificationResultValidatorSchema = VerificationResultValidatorSchema;
module.exports.VerificationResultValidator = VerificationResultValidator;
