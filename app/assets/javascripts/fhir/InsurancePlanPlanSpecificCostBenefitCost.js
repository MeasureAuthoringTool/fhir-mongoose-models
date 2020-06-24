const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanPlanSpecificCostBenefitCostSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   applicability : CodeableConceptSchema,
   qualifiers : [CodeableConceptSchema],
   value : QuantitySchema,
   fhirTitle: { type: String, default: 'InsurancePlanPlanSpecificCostBenefitCost' },
});

class InsurancePlanPlanSpecificCostBenefitCost extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSpecificCostBenefitCostSchema);
    this._type = 'FHIR::InsurancePlanPlanSpecificCostBenefitCost';
  }
};


module.exports.InsurancePlanPlanSpecificCostBenefitCostSchema = InsurancePlanPlanSpecificCostBenefitCostSchema;
module.exports.InsurancePlanPlanSpecificCostBenefitCost = InsurancePlanPlanSpecificCostBenefitCost;
