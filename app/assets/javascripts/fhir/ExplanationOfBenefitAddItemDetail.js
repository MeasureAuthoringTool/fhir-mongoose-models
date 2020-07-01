const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitAddItemDetailSubDetailSchema } = require('./ExplanationOfBenefitAddItemDetailSubDetail');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ExplanationOfBenefitAddItemDetailSchema = BackboneElementSchemaFunction({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  subDetail: [ExplanationOfBenefitAddItemDetailSubDetailSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitAddItemDetail' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitAddItemDetail' },
});

class ExplanationOfBenefitAddItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAddItemDetailSchema);
    this.typeName = 'ExplanationOfBenefitAddItemDetail';
    this._type = 'FHIR::ExplanationOfBenefitAddItemDetail';
  }
}

module.exports.ExplanationOfBenefitAddItemDetailSchema = ExplanationOfBenefitAddItemDetailSchema;
module.exports.ExplanationOfBenefitAddItemDetail = ExplanationOfBenefitAddItemDetail;
