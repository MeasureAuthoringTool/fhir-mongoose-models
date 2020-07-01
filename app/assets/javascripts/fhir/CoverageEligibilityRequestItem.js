const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityRequestItemDiagnosisSchema } = require('./CoverageEligibilityRequestItemDiagnosis');
const { MoneySchema } = require('./Money');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const CoverageEligibilityRequestItemSchema = BackboneElementSchemaFunction({
  supportingInfoSequence: [PrimitivePositiveIntSchema],
  category: CodeableConceptSchema,
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  provider: ReferenceSchema,
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  facility: ReferenceSchema,
  diagnosis: [CoverageEligibilityRequestItemDiagnosisSchema],
  detail: [ReferenceSchema],
  typeName: { type: String, default: 'CoverageEligibilityRequestItem' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityRequestItem' },
});

class CoverageEligibilityRequestItem extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestItemSchema);
    this.typeName = 'CoverageEligibilityRequestItem';
    this._type = 'FHIR::CoverageEligibilityRequestItem';
  }
}

module.exports.CoverageEligibilityRequestItemSchema = CoverageEligibilityRequestItemSchema;
module.exports.CoverageEligibilityRequestItem = CoverageEligibilityRequestItem;
