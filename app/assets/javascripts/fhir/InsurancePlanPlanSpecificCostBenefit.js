const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanPlanSpecificCostBenefitCostSchema } = require('./InsurancePlanPlanSpecificCostBenefitCost');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanPlanSpecificCostBenefitSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   cost : [InsurancePlanPlanSpecificCostBenefitCostSchema],
   fhirTitle: { type: String, default: 'InsurancePlanPlanSpecificCostBenefit' },
});

class InsurancePlanPlanSpecificCostBenefit extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSpecificCostBenefitSchema);
    this._type = 'FHIR::InsurancePlanPlanSpecificCostBenefit';
  }
};


module.exports.InsurancePlanPlanSpecificCostBenefitSchema = InsurancePlanPlanSpecificCostBenefitSchema;
module.exports.InsurancePlanPlanSpecificCostBenefit = InsurancePlanPlanSpecificCostBenefit;
