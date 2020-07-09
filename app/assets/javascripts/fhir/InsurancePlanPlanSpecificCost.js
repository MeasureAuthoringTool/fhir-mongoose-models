const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSpecificCostBenefitSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSpecificCostSchema } = require('./allSchemaHeaders.js');

InsurancePlanPlanSpecificCostSchema.add(BackboneElementSchema);
InsurancePlanPlanSpecificCostSchema.remove('id');
InsurancePlanPlanSpecificCostSchema.add({
  category: CodeableConceptSchema,
  benefit: [InsurancePlanPlanSpecificCostBenefitSchema],
});

module.exports.InsurancePlanPlanSpecificCostSchema = InsurancePlanPlanSpecificCostSchema;
