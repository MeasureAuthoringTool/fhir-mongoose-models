const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { StatusSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { VerificationResultAttestationSchema } = require('./allSchemaHeaders.js');
const { VerificationResultPrimarySourceSchema } = require('./allSchemaHeaders.js');
const { VerificationResultValidatorSchema } = require('./allSchemaHeaders.js');
const { VerificationResultSchema } = require('./allSchemaHeaders.js');

VerificationResultSchema.add(DomainResourceSchema);
VerificationResultSchema.remove('id');
VerificationResultSchema.add({
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
});

module.exports.VerificationResultSchema = VerificationResultSchema;
