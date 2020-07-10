const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitTotalSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitTotalSchema.add(BackboneElementSchema);
ExplanationOfBenefitTotalSchema.remove('id');
ExplanationOfBenefitTotalSchema.add({
  category: CodeableConceptSchema,
  amount: MoneySchema,
});

module.exports.ExplanationOfBenefitTotalSchema = ExplanationOfBenefitTotalSchema;
