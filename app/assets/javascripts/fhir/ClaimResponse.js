const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { ClaimResponseAddItemSchema } = require('./ClaimResponseAddItem');
const { ClaimResponseErrorSchema } = require('./ClaimResponseError');
const { ClaimResponseInsuranceSchema } = require('./ClaimResponseInsurance');
const { ClaimResponseItemSchema } = require('./ClaimResponseItem');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { ClaimResponsePaymentSchema } = require('./ClaimResponsePayment');
const { ClaimResponseProcessNoteSchema } = require('./ClaimResponseProcessNote');
const { ClaimResponseStatusSchema } = require('./ClaimResponseStatus');
const { ClaimResponseTotalSchema } = require('./ClaimResponseTotal');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { UseSchema } = require('./Use');

const ClaimResponseSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'ClaimResponse' },
  _type: { type: String, default: 'FHIR::ClaimResponse' },
});

class ClaimResponse extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseSchema);
    this.typeName = 'ClaimResponse';
    this._type = 'FHIR::ClaimResponse';
  }
}

module.exports.ClaimResponseSchema = ClaimResponseSchema;
module.exports.ClaimResponse = ClaimResponse;
