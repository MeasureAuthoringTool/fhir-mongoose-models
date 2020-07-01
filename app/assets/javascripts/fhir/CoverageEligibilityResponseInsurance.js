const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CoverageEligibilityResponseInsuranceItemSchema } = require('./CoverageEligibilityResponseInsuranceItem');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const CoverageEligibilityResponseInsuranceSchema = BackboneElementSchemaFunction({
  coverage: ReferenceSchema,
  inforce: PrimitiveBooleanSchema,
  benefitPeriod: PeriodSchema,
  item: [CoverageEligibilityResponseInsuranceItemSchema],
  typeName: { type: String, default: 'CoverageEligibilityResponseInsurance' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityResponseInsurance' },
});

class CoverageEligibilityResponseInsurance extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseInsuranceSchema);
    this.typeName = 'CoverageEligibilityResponseInsurance';
    this._type = 'FHIR::CoverageEligibilityResponseInsurance';
  }
}

module.exports.CoverageEligibilityResponseInsuranceSchema = CoverageEligibilityResponseInsuranceSchema;
module.exports.CoverageEligibilityResponseInsurance = CoverageEligibilityResponseInsurance;
