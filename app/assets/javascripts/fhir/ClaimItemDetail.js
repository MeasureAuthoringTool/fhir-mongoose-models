const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimItemDetailSubDetailSchema } = require('./ClaimItemDetailSubDetail');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ClaimItemDetailSchema = BackboneElementSchemaFunction({
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
  subDetail: [ClaimItemDetailSubDetailSchema],
  typeName: { type: String, default: 'ClaimItemDetail' },
  _type: { type: String, default: 'FHIR::ClaimItemDetail' },
});

class ClaimItemDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimItemDetailSchema);
    this.typeName = 'ClaimItemDetail';
    this._type = 'FHIR::ClaimItemDetail';
  }
}

module.exports.ClaimItemDetailSchema = ClaimItemDetailSchema;
module.exports.ClaimItemDetail = ClaimItemDetail;
