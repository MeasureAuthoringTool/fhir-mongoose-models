const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanPlanSpecificCostBenefitSchema } = require('./InsurancePlanPlanSpecificCostBenefit');

const InsurancePlanPlanSpecificCostSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  benefit: [InsurancePlanPlanSpecificCostBenefitSchema],
  typeName: { type: String, default: 'InsurancePlanPlanSpecificCost' },
  _type: { type: String, default: 'FHIR::InsurancePlanPlanSpecificCost' },
});

class InsurancePlanPlanSpecificCost extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSpecificCostSchema);
    this.typeName = 'InsurancePlanPlanSpecificCost';
    this._type = 'FHIR::InsurancePlanPlanSpecificCost';
  }
}

module.exports.InsurancePlanPlanSpecificCostSchema = InsurancePlanPlanSpecificCostSchema;
module.exports.InsurancePlanPlanSpecificCost = InsurancePlanPlanSpecificCost;
