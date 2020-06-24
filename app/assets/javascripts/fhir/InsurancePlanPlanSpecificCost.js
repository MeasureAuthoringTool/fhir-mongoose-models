const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanPlanSpecificCostBenefitSchema } = require('./InsurancePlanPlanSpecificCostBenefit');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanPlanSpecificCostSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   benefit : [InsurancePlanPlanSpecificCostBenefitSchema],
   fhirTitle: { type: String, default: 'InsurancePlanPlanSpecificCost' },
});

class InsurancePlanPlanSpecificCost extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSpecificCostSchema);
    this._type = 'FHIR::InsurancePlanPlanSpecificCost';
  }
};


module.exports.InsurancePlanPlanSpecificCostSchema = InsurancePlanPlanSpecificCostSchema;
module.exports.InsurancePlanPlanSpecificCost = InsurancePlanPlanSpecificCost;
