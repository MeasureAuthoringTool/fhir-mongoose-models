const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanPlanGeneralCostSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   groupSize : Number,
   cost : MoneySchema,
   comment : String,
   fhirTitle: { type: String, default: 'InsurancePlanPlanGeneralCost' },
});

class InsurancePlanPlanGeneralCost extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanGeneralCostSchema);
    this._type = 'FHIR::InsurancePlanPlanGeneralCost';
  }
};


module.exports.InsurancePlanPlanGeneralCostSchema = InsurancePlanPlanGeneralCostSchema;
module.exports.InsurancePlanPlanGeneralCost = InsurancePlanPlanGeneralCost;
