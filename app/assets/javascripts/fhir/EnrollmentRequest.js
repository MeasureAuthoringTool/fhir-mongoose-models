const { DomainResourceSchema } = require('./DomainResource');
const { EnrollmentRequestStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EnrollmentRequestSchema } = require('./allSchemaHeaders.js');

EnrollmentRequestSchema.add(DomainResourceSchema);
EnrollmentRequestSchema.remove('id');
EnrollmentRequestSchema.add({
  identifier: [IdentifierSchema],
  status: EnrollmentRequestStatusSchema,
  created: PrimitiveDateTimeSchema,
  insurer: ReferenceSchema,
  provider: ReferenceSchema,
  candidate: ReferenceSchema,
  coverage: ReferenceSchema,
});

module.exports.EnrollmentRequestSchema = EnrollmentRequestSchema;
