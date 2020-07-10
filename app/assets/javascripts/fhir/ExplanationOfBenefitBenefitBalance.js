const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitBenefitBalanceFinancialSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitBenefitBalanceSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitBenefitBalanceSchema.add(BackboneElementSchema);
ExplanationOfBenefitBenefitBalanceSchema.remove('id');
ExplanationOfBenefitBenefitBalanceSchema.add({
  category: CodeableConceptSchema,
  excluded: PrimitiveBooleanSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  network: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  term: CodeableConceptSchema,
  financial: [ExplanationOfBenefitBenefitBalanceFinancialSchema],
});

module.exports.ExplanationOfBenefitBenefitBalanceSchema = ExplanationOfBenefitBenefitBalanceSchema;
