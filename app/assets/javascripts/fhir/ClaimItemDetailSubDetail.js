const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ClaimItemDetailSubDetailSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ClaimItemDetailSubDetail' },
  _type: { type: String, default: 'FHIR::ClaimItemDetailSubDetail' },
});

class ClaimItemDetailSubDetail extends mongoose.Document {
  constructor(object) {
    super(object, ClaimItemDetailSubDetailSchema);
    this.typeName = 'ClaimItemDetailSubDetail';
    this._type = 'FHIR::ClaimItemDetailSubDetail';
  }
}

module.exports.ClaimItemDetailSubDetailSchema = ClaimItemDetailSubDetailSchema;
module.exports.ClaimItemDetailSubDetail = ClaimItemDetailSubDetail;
