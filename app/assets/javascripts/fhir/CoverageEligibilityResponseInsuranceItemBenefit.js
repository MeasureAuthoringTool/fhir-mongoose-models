const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { CoverageEligibilityResponseInsuranceItemBenefitSchema } = require('./allSchemaHeaders.js');

CoverageEligibilityResponseInsuranceItemBenefitSchema.add(BackboneElementSchema);
CoverageEligibilityResponseInsuranceItemBenefitSchema.remove('id');
CoverageEligibilityResponseInsuranceItemBenefitSchema.add({
  type: CodeableConceptSchema,
  allowedUnsignedInt: PrimitiveUnsignedIntSchema,
  allowedString: PrimitiveStringSchema,
  allowedMoney: MoneySchema,
  usedUnsignedInt: PrimitiveUnsignedIntSchema,
  usedString: PrimitiveStringSchema,
  usedMoney: MoneySchema,
});

module.exports.CoverageEligibilityResponseInsuranceItemBenefitSchema = CoverageEligibilityResponseInsuranceItemBenefitSchema;
