const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageClassSchema } = require('./allSchemaHeaders.js');
const { CoverageCostToBeneficiarySchema } = require('./allSchemaHeaders.js');
const { CoverageStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageSchema } = require('./allSchemaHeaders.js');

CoverageSchema.add(DomainResourceSchema);
CoverageSchema.remove('id');
CoverageSchema.add({
  identifier: [IdentifierSchema],
  status: CoverageStatusSchema,
  type: CodeableConceptSchema,
  policyHolder: ReferenceSchema,
  subscriber: ReferenceSchema,
  subscriberId: PrimitiveStringSchema,
  beneficiary: ReferenceSchema,
  dependent: PrimitiveStringSchema,
  relationship: CodeableConceptSchema,
  period: PeriodSchema,
  payor: [ReferenceSchema],
  class: [CoverageClassSchema],
  order: PrimitivePositiveIntSchema,
  network: PrimitiveStringSchema,
  costToBeneficiary: [CoverageCostToBeneficiarySchema],
  subrogation: PrimitiveBooleanSchema,
  contract: [ReferenceSchema],
});

module.exports.CoverageSchema = CoverageSchema;
