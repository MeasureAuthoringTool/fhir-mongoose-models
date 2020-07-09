const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitBenefitBalanceFinancialSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitBenefitBalanceFinancialSchema.add(BackboneElementSchema);
ExplanationOfBenefitBenefitBalanceFinancialSchema.remove('id');
ExplanationOfBenefitBenefitBalanceFinancialSchema.add({
  type: CodeableConceptSchema,
  allowedUnsignedInt: PrimitiveUnsignedIntSchema,
  allowedString: PrimitiveStringSchema,
  allowedMoney: MoneySchema,
  usedUnsignedInt: PrimitiveUnsignedIntSchema,
  usedMoney: MoneySchema,
});

module.exports.ExplanationOfBenefitBenefitBalanceFinancialSchema = ExplanationOfBenefitBenefitBalanceFinancialSchema;
