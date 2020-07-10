const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanGeneralCostSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSpecificCostSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { InsurancePlanPlanSchema } = require('./allSchemaHeaders.js');

InsurancePlanPlanSchema.add(BackboneElementSchema);
InsurancePlanPlanSchema.remove('id');
InsurancePlanPlanSchema.add({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  coverageArea: [ReferenceSchema],
  network: [ReferenceSchema],
  generalCost: [InsurancePlanPlanGeneralCostSchema],
  specificCost: [InsurancePlanPlanSpecificCostSchema],
});

module.exports.InsurancePlanPlanSchema = InsurancePlanPlanSchema;
