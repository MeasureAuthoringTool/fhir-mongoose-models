const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimResponseAddItemDetailSubDetailSchema } = require('./ClaimResponseAddItemDetailSubDetail');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ClaimResponseAddItemDetailSchema = BackboneElementSchemaFunction({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  subDetail: [ClaimResponseAddItemDetailSubDetailSchema],
  typeName: { type: String, default: 'ClaimResponseAddItemDetail' },
  _type: { type: String, default: 'FHIR::ClaimResponseAddItemDetail' },
});

class ClaimResponseAddItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseAddItemDetailSchema);
    this.typeName = 'ClaimResponseAddItemDetail';
    this._type = 'FHIR::ClaimResponseAddItemDetail';
  }
}

module.exports.ClaimResponseAddItemDetailSchema = ClaimResponseAddItemDetailSchema;
module.exports.ClaimResponseAddItemDetail = ClaimResponseAddItemDetail;
