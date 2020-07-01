const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');

const CoverageEligibilityResponseInsuranceItemBenefitSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  allowedUnsignedInt: PrimitiveUnsignedIntSchema,
  allowedString: PrimitiveStringSchema,
  allowedMoney: MoneySchema,
  usedUnsignedInt: PrimitiveUnsignedIntSchema,
  usedString: PrimitiveStringSchema,
  usedMoney: MoneySchema,
  typeName: { type: String, default: 'CoverageEligibilityResponseInsuranceItemBenefit' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityResponseInsuranceItemBenefit' },
});

class CoverageEligibilityResponseInsuranceItemBenefit extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseInsuranceItemBenefitSchema);
    this.typeName = 'CoverageEligibilityResponseInsuranceItemBenefit';
    this._type = 'FHIR::CoverageEligibilityResponseInsuranceItemBenefit';
  }
}

module.exports.CoverageEligibilityResponseInsuranceItemBenefitSchema = CoverageEligibilityResponseInsuranceItemBenefitSchema;
module.exports.CoverageEligibilityResponseInsuranceItemBenefit = CoverageEligibilityResponseInsuranceItemBenefit;
