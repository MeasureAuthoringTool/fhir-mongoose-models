const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanGeneralCostSchema } = require('./allSchemaHeaders.js');

InsurancePlanPlanGeneralCostSchema.add(BackboneElementSchema);
InsurancePlanPlanGeneralCostSchema.remove('id');
InsurancePlanPlanGeneralCostSchema.add({
  type: CodeableConceptSchema,
  groupSize: PrimitivePositiveIntSchema,
  cost: MoneySchema,
  comment: PrimitiveStringSchema,
});

module.exports.InsurancePlanPlanGeneralCostSchema = InsurancePlanPlanGeneralCostSchema;
