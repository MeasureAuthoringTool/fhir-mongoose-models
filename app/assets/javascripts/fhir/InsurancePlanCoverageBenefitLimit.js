const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');

const InsurancePlanCoverageBenefitLimitSchema = BackboneElementSchemaFunction({
  value: QuantitySchema,
  code: CodeableConceptSchema,
  typeName: { type: String, default: 'InsurancePlanCoverageBenefitLimit' },
  _type: { type: String, default: 'FHIR::InsurancePlanCoverageBenefitLimit' },
});

class InsurancePlanCoverageBenefitLimit extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanCoverageBenefitLimitSchema);
    this.typeName = 'InsurancePlanCoverageBenefitLimit';
    this._type = 'FHIR::InsurancePlanCoverageBenefitLimit';
  }
}

module.exports.InsurancePlanCoverageBenefitLimitSchema = InsurancePlanCoverageBenefitLimitSchema;
module.exports.InsurancePlanCoverageBenefitLimit = InsurancePlanCoverageBenefitLimit;
