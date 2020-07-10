const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseAddItemSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseErrorSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseInsuranceSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');
const { ClaimResponsePaymentSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseProcessNoteSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseStatusSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseTotalSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RemittanceOutcomeSchema } = require('./allSchemaHeaders.js');
const { UseSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseSchema } = require('./allSchemaHeaders.js');

ClaimResponseSchema.add(DomainResourceSchema);
ClaimResponseSchema.remove('id');
ClaimResponseSchema.add({
  identifier: [IdentifierSchema],
  status: ClaimResponseStatusSchema,
  type: CodeableConceptSchema,
  subType: CodeableConceptSchema,
  use: UseSchema,
  patient: ReferenceSchema,
  created: PrimitiveDateTimeSchema,
  insurer: ReferenceSchema,
  requestor: ReferenceSchema,
  request: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  preAuthRef: PrimitiveStringSchema,
  preAuthPeriod: PeriodSchema,
  payeeType: CodeableConceptSchema,
  item: [ClaimResponseItemSchema],
  addItem: [ClaimResponseAddItemSchema],
  adjudication: [ClaimResponseItemAdjudicationSchema],
  total: [ClaimResponseTotalSchema],
  payment: ClaimResponsePaymentSchema,
  fundsReserve: CodeableConceptSchema,
  formCode: CodeableConceptSchema,
  form: AttachmentSchema,
  processNote: [ClaimResponseProcessNoteSchema],
  communicationRequest: [ReferenceSchema],
  insurance: [ClaimResponseInsuranceSchema],
  error: [ClaimResponseErrorSchema],
});

module.exports.ClaimResponseSchema = ClaimResponseSchema;
