const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestInsuranceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestItemSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestSupportingInfoSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { EligibilityRequestPurposeSchema } = require('./allSchemaHeaders.js');
const { EligibilityRequestStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityRequestSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityRequestSchema.add(DomainResourceSchema);
CoverageEligibilityRequestSchema.remove('id');
CoverageEligibilityRequestSchema.add({
  identifier: [IdentifierSchema],
  status: EligibilityRequestStatusSchema,
  priority: CodeableConceptSchema,
  purpose: [EligibilityRequestPurposeSchema],
  patient: ReferenceSchema,
  servicedDate: PrimitiveDateSchema,
  servicedPeriod: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  enterer: ReferenceSchema,
  provider: ReferenceSchema,
  insurer: ReferenceSchema,
  facility: ReferenceSchema,
  supportingInfo: [CoverageEligibilityRequestSupportingInfoSchema],
  insurance: [CoverageEligibilityRequestInsuranceSchema],
  item: [CoverageEligibilityRequestItemSchema],
});

module.exports.CoverageEligibilityRequestSchema = CoverageEligibilityRequestSchema;
