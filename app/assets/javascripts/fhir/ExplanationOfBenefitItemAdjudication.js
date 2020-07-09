const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitItemAdjudicationSchema.add(BackboneElementSchema);
ExplanationOfBenefitItemAdjudicationSchema.remove('id');
ExplanationOfBenefitItemAdjudicationSchema.add({
  category: CodeableConceptSchema,
  reason: CodeableConceptSchema,
  amount: MoneySchema,
  value: PrimitiveDecimalSchema,
});

module.exports.ExplanationOfBenefitItemAdjudicationSchema = ExplanationOfBenefitItemAdjudicationSchema;
