const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSpecificCostBenefitCostSchema } = require('./allSchemaHeaders.js');

InsurancePlanPlanSpecificCostBenefitCostSchema.add(BackboneElementSchema);
InsurancePlanPlanSpecificCostBenefitCostSchema.remove('id');
InsurancePlanPlanSpecificCostBenefitCostSchema.add({
  type: CodeableConceptSchema,
  applicability: CodeableConceptSchema,
  qualifiers: [CodeableConceptSchema],
  value: QuantitySchema,
});

module.exports.InsurancePlanPlanSpecificCostBenefitCostSchema = InsurancePlanPlanSpecificCostBenefitCostSchema;
