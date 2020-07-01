const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { ExplanationOfBenefitItemDetailSubDetailSchema } = require('./ExplanationOfBenefitItemDetailSubDetail');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ExplanationOfBenefitItemDetailSchema = BackboneElementSchemaFunction({
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
  subDetail: [ExplanationOfBenefitItemDetailSubDetailSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitItemDetail' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitItemDetail' },
});

class ExplanationOfBenefitItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemDetailSchema);
    this.typeName = 'ExplanationOfBenefitItemDetail';
    this._type = 'FHIR::ExplanationOfBenefitItemDetail';
  }
}

module.exports.ExplanationOfBenefitItemDetailSchema = ExplanationOfBenefitItemDetailSchema;
module.exports.ExplanationOfBenefitItemDetail = ExplanationOfBenefitItemDetail;
