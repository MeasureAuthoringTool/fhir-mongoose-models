const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { InsurancePlanPlanGeneralCostSchema } = require('./InsurancePlanPlanGeneralCost');
const { InsurancePlanPlanSpecificCostSchema } = require('./InsurancePlanPlanSpecificCost');
const { ReferenceSchema } = require('./Reference');

const InsurancePlanPlanSchema = BackboneElementSchemaFunction({
  identifier: [IdentifierSchema],
  type: CodeableConceptSchema,
  coverageArea: [ReferenceSchema],
  network: [ReferenceSchema],
  generalCost: [InsurancePlanPlanGeneralCostSchema],
  specificCost: [InsurancePlanPlanSpecificCostSchema],
  typeName: { type: String, default: 'InsurancePlanPlan' },
  _type: { type: String, default: 'FHIR::InsurancePlanPlan' },
});

class InsurancePlanPlan extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanPlanSchema);
    this.typeName = 'InsurancePlanPlan';
    this._type = 'FHIR::InsurancePlanPlan';
  }
}

module.exports.InsurancePlanPlanSchema = InsurancePlanPlanSchema;
module.exports.InsurancePlanPlan = InsurancePlanPlan;
