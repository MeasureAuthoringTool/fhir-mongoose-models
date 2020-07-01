const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ClaimResponseAddItemDetailSubDetailSchema = BackboneElementSchemaFunction({
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  typeName: { type: String, default: 'ClaimResponseAddItemDetailSubDetail' },
  _type: { type: String, default: 'FHIR::ClaimResponseAddItemDetailSubDetail' },
});

class ClaimResponseAddItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseAddItemDetailSubDetailSchema);
    this.typeName = 'ClaimResponseAddItemDetailSubDetail';
    this._type = 'FHIR::ClaimResponseAddItemDetailSubDetail';
  }
}

module.exports.ClaimResponseAddItemDetailSubDetailSchema = ClaimResponseAddItemDetailSubDetailSchema;
module.exports.ClaimResponseAddItemDetailSubDetail = ClaimResponseAddItemDetailSubDetail;
