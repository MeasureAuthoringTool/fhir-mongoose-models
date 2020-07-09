const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseInsuranceItemBenefitSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseInsuranceItemSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityResponseInsuranceItemSchema.add(BackboneElementSchema);
CoverageEligibilityResponseInsuranceItemSchema.remove('id');
CoverageEligibilityResponseInsuranceItemSchema.add({
  category: CodeableConceptSchema,
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  provider: ReferenceSchema,
  excluded: PrimitiveBooleanSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  network: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  term: CodeableConceptSchema,
  benefit: [CoverageEligibilityResponseInsuranceItemBenefitSchema],
  authorizationRequired: PrimitiveBooleanSchema,
  authorizationSupporting: [CodeableConceptSchema],
  authorizationUrl: PrimitiveUriSchema,
});

module.exports.CoverageEligibilityResponseInsuranceItemSchema = CoverageEligibilityResponseInsuranceItemSchema;
