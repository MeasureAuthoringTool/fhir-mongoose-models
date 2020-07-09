const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SignatureSchema } = require('./allSchemaHeaders.js');
const { VerificationResultValidatorSchema } = require('./allSchemaHeaders.js');

VerificationResultValidatorSchema.add(BackboneElementSchema);
VerificationResultValidatorSchema.remove('id');
VerificationResultValidatorSchema.add({
  organization: ReferenceSchema,
  identityCertificate: PrimitiveStringSchema,
  attestationSignature: SignatureSchema,
});

module.exports.VerificationResultValidatorSchema = VerificationResultValidatorSchema;
