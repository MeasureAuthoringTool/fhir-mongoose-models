const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitPaymentSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitPaymentSchema.add(BackboneElementSchema);
ExplanationOfBenefitPaymentSchema.remove('id');
ExplanationOfBenefitPaymentSchema.add({
  type: CodeableConceptSchema,
  adjustment: MoneySchema,
  adjustmentReason: CodeableConceptSchema,
  date: PrimitiveDateSchema,
  amount: MoneySchema,
  identifier: IdentifierSchema,
});

module.exports.ExplanationOfBenefitPaymentSchema = ExplanationOfBenefitPaymentSchema;
