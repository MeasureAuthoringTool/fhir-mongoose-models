const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemDetailSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitItemSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitItemSchema.add(BackboneElementSchema);
ExplanationOfBenefitItemSchema.remove('id');
ExplanationOfBenefitItemSchema.add({
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
});

module.exports.ExplanationOfBenefitItemSchema = ExplanationOfBenefitItemSchema;
