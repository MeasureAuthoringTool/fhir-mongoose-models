const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { ChargeItemPerformerSchema } = require('./allSchemaHeaders.js');
const { ChargeItemStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { ChargeItemSchema } = require('./allSchemaHeaders.js');

ChargeItemSchema.add(DomainResourceSchema);
ChargeItemSchema.remove('id');
ChargeItemSchema.add({
  identifier: [IdentifierSchema],
  definitionUri: [PrimitiveUriSchema],
  definitionCanonical: [PrimitiveCanonicalSchema],
  status: ChargeItemStatusSchema,
  partOf: [ReferenceSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  context: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  performer: [ChargeItemPerformerSchema],
  performingOrganization: ReferenceSchema,
  requestingOrganization: ReferenceSchema,
  costCenter: ReferenceSchema,
  quantity: QuantitySchema,
  bodysite: [CodeableConceptSchema],
  factorOverride: PrimitiveDecimalSchema,
  priceOverride: MoneySchema,
  overrideReason: PrimitiveStringSchema,
  enterer: ReferenceSchema,
  enteredDate: PrimitiveDateTimeSchema,
  reason: [CodeableConceptSchema],
  service: [ReferenceSchema],
  productReference: ReferenceSchema,
  productCodeableConcept: CodeableConceptSchema,
  account: [ReferenceSchema],
  note: [AnnotationSchema],
  supportingInformation: [ReferenceSchema],
});

module.exports.ChargeItemSchema = ChargeItemSchema;
