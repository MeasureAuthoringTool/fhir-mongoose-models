const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');

const InsurancePlanPlanSpecificCostBenefitCostSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  applicability: CodeableConceptSchema,
  qualifiers: [CodeableConceptSchema],
  value: QuantitySchema,
  typeName: { type: String, default: 'InsurancePlanPlanSpecificCostBenefitCost' },
  _type: { type: String, default: 'FHIR::InsurancePlanPlanSpecificCostBenefitCost' },
});

class InsurancePlanPlanSpecificCostBenefitCost extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSpecificCostBenefitCostSchema);
    this.typeName = 'InsurancePlanPlanSpecificCostBenefitCost';
    this._type = 'FHIR::InsurancePlanPlanSpecificCostBenefitCost';
  }
}

module.exports.InsurancePlanPlanSpecificCostBenefitCostSchema = InsurancePlanPlanSpecificCostBenefitCostSchema;
module.exports.InsurancePlanPlanSpecificCostBenefitCost = InsurancePlanPlanSpecificCostBenefitCost;
