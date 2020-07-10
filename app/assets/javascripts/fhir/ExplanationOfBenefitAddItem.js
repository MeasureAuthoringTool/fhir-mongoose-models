const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAddItemDetailSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitAddItemSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitAddItemSchema.add(BackboneElementSchema);
ExplanationOfBenefitAddItemSchema.remove('id');
ExplanationOfBenefitAddItemSchema.add({
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
});

module.exports.ExplanationOfBenefitAddItemSchema = ExplanationOfBenefitAddItemSchema;
