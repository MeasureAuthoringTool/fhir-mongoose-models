const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ClaimItemDetailSchema } = require('./ClaimItemDetail');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ClaimItemSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  careTeamSequence: [PrimitivePositiveIntSchema],
  diagnosisSequence: [PrimitivePositiveIntSchema],
  procedureSequence: [PrimitivePositiveIntSchema],
  informationSequence: [PrimitivePositiveIntSchema],
  revenue: CodeableConceptSchema,
  category: CodeableConceptSchema,
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
  udi: [ReferenceSchema],
  bodySite: CodeableConceptSchema,
  subSite: [CodeableConceptSchema],
  encounter: [ReferenceSchema],
  detail: [ClaimItemDetailSchema],
  typeName: { type: String, default: 'ClaimItem' },
  _type: { type: String, default: 'FHIR::ClaimItem' },
});

class ClaimItem extends mongoose.Document {
  constructor(object) {
    super(object, ClaimItemSchema);
    this.typeName = 'ClaimItem';
    this._type = 'FHIR::ClaimItem';
  }
}

module.exports.ClaimItemSchema = ClaimItemSchema;
module.exports.ClaimItem = ClaimItem;
