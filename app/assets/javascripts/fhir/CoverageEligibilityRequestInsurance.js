const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const CoverageEligibilityRequestInsuranceSchema = BackboneElementSchemaFunction({
  focal: PrimitiveBooleanSchema,
  coverage: ReferenceSchema,
  businessArrangement: PrimitiveStringSchema,
  typeName: { type: String, default: 'CoverageEligibilityRequestInsurance' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityRequestInsurance' },
});

class CoverageEligibilityRequestInsurance extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestInsuranceSchema);
    this.typeName = 'CoverageEligibilityRequestInsurance';
    this._type = 'FHIR::CoverageEligibilityRequestInsurance';
  }
}

module.exports.CoverageEligibilityRequestInsuranceSchema = CoverageEligibilityRequestInsuranceSchema;
module.exports.CoverageEligibilityRequestInsurance = CoverageEligibilityRequestInsurance;
