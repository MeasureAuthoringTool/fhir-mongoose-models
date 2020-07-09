const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SignatureSchema } = require('./allSchemaHeaders.js');
const { VerificationResultAttestationSchema } = require('./allSchemaHeaders.js');

VerificationResultAttestationSchema.add(BackboneElementSchema);
VerificationResultAttestationSchema.remove('id');
VerificationResultAttestationSchema.add({
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  communicationMethod: CodeableConceptSchema,
  date: PrimitiveDateSchema,
  sourceIdentityCertificate: PrimitiveStringSchema,
  proxyIdentityCertificate: PrimitiveStringSchema,
  proxySignature: SignatureSchema,
  sourceSignature: SignatureSchema,
});

module.exports.VerificationResultAttestationSchema = VerificationResultAttestationSchema;
