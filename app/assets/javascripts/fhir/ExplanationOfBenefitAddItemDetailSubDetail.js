const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ExplanationOfBenefitAddItemDetailSubDetailSchema = BackboneElementSchemaFunction({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitAddItemDetailSubDetail' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitAddItemDetailSubDetail' },
});

class ExplanationOfBenefitAddItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAddItemDetailSubDetailSchema);
    this.typeName = 'ExplanationOfBenefitAddItemDetailSubDetail';
    this._type = 'FHIR::ExplanationOfBenefitAddItemDetailSubDetail';
  }
}

module.exports.ExplanationOfBenefitAddItemDetailSubDetailSchema = ExplanationOfBenefitAddItemDetailSubDetailSchema;
module.exports.ExplanationOfBenefitAddItemDetailSubDetail = ExplanationOfBenefitAddItemDetailSubDetail;
