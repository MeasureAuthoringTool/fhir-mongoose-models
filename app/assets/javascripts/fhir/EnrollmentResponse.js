const { DomainResourceSchema } = require('./DomainResource');
const { EnrollmentResponseStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RemittanceOutcomeSchema } = require('./allSchemaHeaders.js');
const { EnrollmentResponseSchema } = require('./allSchemaHeaders.js');

EnrollmentResponseSchema.add(DomainResourceSchema);
EnrollmentResponseSchema.remove('id');
EnrollmentResponseSchema.add({
  identifier: [IdentifierSchema],
  status: EnrollmentResponseStatusSchema,
  request: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  created: PrimitiveDateTimeSchema,
  organization: ReferenceSchema,
  requestProvider: ReferenceSchema,
});

module.exports.EnrollmentResponseSchema = EnrollmentResponseSchema;
