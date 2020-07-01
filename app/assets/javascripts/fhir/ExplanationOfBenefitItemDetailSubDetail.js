const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ExplanationOfBenefitItemDetailSubDetailSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  revenue: CodeableConceptSchema,
  category: CodeableConceptSchema,
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  programCode: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  udi: [ReferenceSchema],
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitItemDetailSubDetail' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitItemDetailSubDetail' },
});

class ExplanationOfBenefitItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemDetailSubDetailSchema);
    this.typeName = 'ExplanationOfBenefitItemDetailSubDetail';
    this._type = 'FHIR::ExplanationOfBenefitItemDetailSubDetail';
  }
}

module.exports.ExplanationOfBenefitItemDetailSubDetailSchema = ExplanationOfBenefitItemDetailSubDetailSchema;
module.exports.ExplanationOfBenefitItemDetailSubDetail = ExplanationOfBenefitItemDetailSubDetail;
