const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseErrorSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseInsuranceSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { EligibilityResponsePurposeSchema } = require('./allSchemaHeaders.js');
const { EligibilityResponseStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RemittanceOutcomeSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityResponseSchema.add(DomainResourceSchema);
CoverageEligibilityResponseSchema.remove('id');
CoverageEligibilityResponseSchema.add({
  identifier: [IdentifierSchema],
  status: EligibilityResponseStatusSchema,
  purpose: [EligibilityResponsePurposeSchema],
  patient: ReferenceSchema,
  servicedDate: PrimitiveDateSchema,
  servicedPeriod: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  requestor: ReferenceSchema,
  request: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  insurer: ReferenceSchema,
  insurance: [CoverageEligibilityResponseInsuranceSchema],
  preAuthRef: PrimitiveStringSchema,
  form: CodeableConceptSchema,
  error: [CoverageEligibilityResponseErrorSchema],
});

module.exports.CoverageEligibilityResponseSchema = CoverageEligibilityResponseSchema;
