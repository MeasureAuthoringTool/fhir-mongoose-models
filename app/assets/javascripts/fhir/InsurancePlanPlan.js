const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { InsurancePlanPlanGeneralCostSchema } = require('./InsurancePlanPlanGeneralCost');
const { InsurancePlanPlanSpecificCostSchema } = require('./InsurancePlanPlanSpecificCost');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanPlanSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   type : CodeableConceptSchema,
   coverageArea : [ReferenceSchema],
   network : [ReferenceSchema],
   generalCost : [InsurancePlanPlanGeneralCostSchema],
   specificCost : [InsurancePlanPlanSpecificCostSchema],
   fhirTitle: { type: String, default: 'InsurancePlanPlan' },
});

class InsurancePlanPlan extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSchema);
    this._type = 'FHIR::InsurancePlanPlan';
  }
};


module.exports.InsurancePlanPlanSchema = InsurancePlanPlanSchema;
module.exports.InsurancePlanPlan = InsurancePlanPlan;
