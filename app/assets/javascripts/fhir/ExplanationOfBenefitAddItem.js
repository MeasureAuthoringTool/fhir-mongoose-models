const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitAddItemDetailSchema } = require('./ExplanationOfBenefitAddItemDetail');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ExplanationOfBenefitAddItemSchema = BackboneElementSchemaFunction({
  itemSequence: [PrimitivePositiveIntSchema],
  detailSequence: [PrimitivePositiveIntSchema],
  subDetailSequence: [PrimitivePositiveIntSchema],
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
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  detail: [ExplanationOfBenefitAddItemDetailSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitAddItem' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitAddItem' },
});

class ExplanationOfBenefitAddItem extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAddItemSchema);
    this.typeName = 'ExplanationOfBenefitAddItem';
    this._type = 'FHIR::ExplanationOfBenefitAddItem';
  }
}

module.exports.ExplanationOfBenefitAddItemSchema = ExplanationOfBenefitAddItemSchema;
module.exports.ExplanationOfBenefitAddItem = ExplanationOfBenefitAddItem;
