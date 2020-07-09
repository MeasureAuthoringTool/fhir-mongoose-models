const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimItemDetailSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ClaimItemSchema } = require('./allSchemaHeaders.js');

ClaimItemSchema.add(BackboneElementSchema);
ClaimItemSchema.remove('id');
ClaimItemSchema.add({
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
});

module.exports.ClaimItemSchema = ClaimItemSchema;
