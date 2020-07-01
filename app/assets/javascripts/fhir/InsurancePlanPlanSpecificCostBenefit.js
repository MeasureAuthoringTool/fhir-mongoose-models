const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanPlanSpecificCostBenefitCostSchema } = require('./InsurancePlanPlanSpecificCostBenefitCost');

const InsurancePlanPlanSpecificCostBenefitSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  cost: [InsurancePlanPlanSpecificCostBenefitCostSchema],
  typeName: { type: String, default: 'InsurancePlanPlanSpecificCostBenefit' },
  _type: { type: String, default: 'FHIR::InsurancePlanPlanSpecificCostBenefit' },
});

class InsurancePlanPlanSpecificCostBenefit extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSpecificCostBenefitSchema);
    this.typeName = 'InsurancePlanPlanSpecificCostBenefit';
    this._type = 'FHIR::InsurancePlanPlanSpecificCostBenefit';
  }
}

module.exports.InsurancePlanPlanSpecificCostBenefitSchema = InsurancePlanPlanSpecificCostBenefitSchema;
module.exports.InsurancePlanPlanSpecificCostBenefit = InsurancePlanPlanSpecificCostBenefit;
