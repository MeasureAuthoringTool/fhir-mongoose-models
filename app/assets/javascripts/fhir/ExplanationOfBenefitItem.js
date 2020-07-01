const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./ExplanationOfBenefitItemAdjudication');
const { ExplanationOfBenefitItemDetailSchema } = require('./ExplanationOfBenefitItemDetail');
const { MoneySchema } = require('./Money');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const ExplanationOfBenefitItemSchema = BackboneElementSchemaFunction({
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
  noteNumber: [PrimitivePositiveIntSchema],
  adjudication: [ExplanationOfBenefitItemAdjudicationSchema],
  detail: [ExplanationOfBenefitItemDetailSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitItem' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitItem' },
});

class ExplanationOfBenefitItem extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemSchema);
    this.typeName = 'ExplanationOfBenefitItem';
    this._type = 'FHIR::ExplanationOfBenefitItem';
  }
}

module.exports.ExplanationOfBenefitItemSchema = ExplanationOfBenefitItemSchema;
module.exports.ExplanationOfBenefitItem = ExplanationOfBenefitItem;
