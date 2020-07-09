const { AddressSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ClaimResponseAddItemDetailSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ClaimResponseAddItemSchema } = require('./allSchemaHeaders.js');

ClaimResponseAddItemSchema.add(BackboneElementSchema);
ClaimResponseAddItemSchema.remove('id');
ClaimResponseAddItemSchema.add({
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
});

module.exports.ClaimResponseAddItemSchema = ClaimResponseAddItemSchema;
