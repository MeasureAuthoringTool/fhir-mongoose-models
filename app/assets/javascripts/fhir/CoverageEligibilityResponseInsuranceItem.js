const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityResponseInsuranceItemBenefitSchema } = require('./CoverageEligibilityResponseInsuranceItemBenefit');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const CoverageEligibilityResponseInsuranceItemSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  provider: ReferenceSchema,
  excluded: PrimitiveBooleanSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  network: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  term: CodeableConceptSchema,
  benefit: [CoverageEligibilityResponseInsuranceItemBenefitSchema],
  authorizationRequired: PrimitiveBooleanSchema,
  authorizationSupporting: [CodeableConceptSchema],
  authorizationUrl: PrimitiveUriSchema,
  typeName: { type: String, default: 'CoverageEligibilityResponseInsuranceItem' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityResponseInsuranceItem' },
});

class CoverageEligibilityResponseInsuranceItem extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseInsuranceItemSchema);
    this.typeName = 'CoverageEligibilityResponseInsuranceItem';
    this._type = 'FHIR::CoverageEligibilityResponseInsuranceItem';
  }
}

module.exports.CoverageEligibilityResponseInsuranceItemSchema = CoverageEligibilityResponseInsuranceItemSchema;
module.exports.CoverageEligibilityResponseInsuranceItem = CoverageEligibilityResponseInsuranceItem;
