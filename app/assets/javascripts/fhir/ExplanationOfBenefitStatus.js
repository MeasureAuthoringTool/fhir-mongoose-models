const { ElementSchema } = require('./Element');
const { ExplanationOfBenefitStatusSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitStatusSchema.add(ElementSchema);
ExplanationOfBenefitStatusSchema.remove('id');
ExplanationOfBenefitStatusSchema.add({
  value: String,
});

module.exports.ExplanationOfBenefitStatusSchema = ExplanationOfBenefitStatusSchema;
