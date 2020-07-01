const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanCoverageBenefitLimitSchema } = require('./InsurancePlanCoverageBenefitLimit');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const InsurancePlanCoverageBenefitSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  requirement: PrimitiveStringSchema,
  limit: [InsurancePlanCoverageBenefitLimitSchema],
  typeName: { type: String, default: 'InsurancePlanCoverageBenefit' },
  _type: { type: String, default: 'FHIR::InsurancePlanCoverageBenefit' },
});

class InsurancePlanCoverageBenefit extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanCoverageBenefitSchema);
    this.typeName = 'InsurancePlanCoverageBenefit';
    this._type = 'FHIR::InsurancePlanCoverageBenefit';
  }
}

module.exports.InsurancePlanCoverageBenefitSchema = InsurancePlanCoverageBenefitSchema;
module.exports.InsurancePlanCoverageBenefit = InsurancePlanCoverageBenefit;
