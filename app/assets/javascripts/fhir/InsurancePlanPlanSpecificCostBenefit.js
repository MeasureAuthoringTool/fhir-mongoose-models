const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSpecificCostBenefitCostSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSpecificCostBenefitSchema } = require('./allSchemaHeaders.js');

InsurancePlanPlanSpecificCostBenefitSchema.add(BackboneElementSchema);
InsurancePlanPlanSpecificCostBenefitSchema.remove('id');
InsurancePlanPlanSpecificCostBenefitSchema.add({
  type: CodeableConceptSchema,
  cost: [InsurancePlanPlanSpecificCostBenefitCostSchema],
});

module.exports.InsurancePlanPlanSpecificCostBenefitSchema = InsurancePlanPlanSpecificCostBenefitSchema;
