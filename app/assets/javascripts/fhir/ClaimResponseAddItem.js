const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimResponseAddItemDetailSchema } = require('./ClaimResponseAddItemDetail');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ClaimResponseAddItemSchema = BackboneElementSchemaFunction({
  itemSequence: [PrimitivePositiveIntSchema],
  detailSequence: [PrimitivePositiveIntSchema],
  subdetailSequence: [PrimitivePositiveIntSchema],
  provider: [ReferenceSchema],
  productOrService: CodeableConceptSchema,
  modifier: [CodeableConceptSchema],
  programCode: [CodeableConceptSchema],
  servicedDate: PrimitiveDateSchema,
  servicedPeriod: PeriodSchema,
  locationCodeableConcept: CodeableConceptSchema,
  locationAddress: AddressSchema,
  locationReference: ReferenceSchema,
  quantity: SimpleQuantitySchema,
  unitPrice: MoneySchema,
  factor: PrimitiveDecimalSchema,
  net: MoneySchema,
  bodySite: CodeableConceptSchema,
  subSite: [CodeableConceptSchema],
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  detail: [ClaimResponseAddItemDetailSchema],
  typeName: { type: String, default: 'ClaimResponseAddItem' },
  _type: { type: String, default: 'FHIR::ClaimResponseAddItem' },
});

class ClaimResponseAddItem extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseAddItemSchema);
    this.typeName = 'ClaimResponseAddItem';
    this._type = 'FHIR::ClaimResponseAddItem';
  }
}

module.exports.ClaimResponseAddItemSchema = ClaimResponseAddItemSchema;
module.exports.ClaimResponseAddItem = ClaimResponseAddItem;
