const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const InsurancePlanPlanGeneralCostSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  groupSize: PrimitivePositiveIntSchema,
  cost: MoneySchema,
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'InsurancePlanPlanGeneralCost' },
  _type: { type: String, default: 'FHIR::InsurancePlanPlanGeneralCost' },
});

class InsurancePlanPlanGeneralCost extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanGeneralCostSchema);
    this.typeName = 'InsurancePlanPlanGeneralCost';
    this._type = 'FHIR::InsurancePlanPlanGeneralCost';
  }
}

module.exports.InsurancePlanPlanGeneralCostSchema = InsurancePlanPlanGeneralCostSchema;
module.exports.InsurancePlanPlanGeneralCost = InsurancePlanPlanGeneralCost;
