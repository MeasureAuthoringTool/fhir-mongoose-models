const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AttachmentSchema } = require('./Attachment');
const { ClaimResponseAddItemSchema } = require('./ClaimResponseAddItem');
const { ClaimResponseErrorSchema } = require('./ClaimResponseError');
const { ClaimResponseInsuranceSchema } = require('./ClaimResponseInsurance');
const { ClaimResponseItemAdjudicationSchema } = require('./ClaimResponseItemAdjudication');
const { ClaimResponseItemSchema } = require('./ClaimResponseItem');
const { ClaimResponsePaymentSchema } = require('./ClaimResponsePayment');
const { ClaimResponseProcessNoteSchema } = require('./ClaimResponseProcessNote');
const { ClaimResponseStatusSchema } = require('./ClaimResponseStatus');
const { ClaimResponseTotalSchema } = require('./ClaimResponseTotal');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { UseSchema } = require('./Use');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ClaimResponseStatusSchema,
   type : CodeableConceptSchema,
   subType : CodeableConceptSchema,
   use : UseSchema,
   patient : ReferenceSchema,
   created : DateTime,
   insurer : ReferenceSchema,
   requestor : ReferenceSchema,
   request : ReferenceSchema,
   outcome : RemittanceOutcomeSchema,
   disposition : String,
   preAuthRef : String,
   preAuthPeriod : PeriodSchema,
   payeeType : CodeableConceptSchema,
   item : [ClaimResponseItemSchema],
   addItem : [ClaimResponseAddItemSchema],
   adjudication : [ClaimResponseItemAdjudicationSchema],
   total : [ClaimResponseTotalSchema],
   payment : ClaimResponsePaymentSchema,
   fundsReserve : CodeableConceptSchema,
   formCode : CodeableConceptSchema,
   form : AttachmentSchema,
   processNote : [ClaimResponseProcessNoteSchema],
   communicationRequest : [ReferenceSchema],
   insurance : [ClaimResponseInsuranceSchema],
   error : [ClaimResponseErrorSchema],
   fhirTitle: { type: String, default: 'ClaimResponse' },
});

class ClaimResponse extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseSchema);
    this._type = 'FHIR::ClaimResponse';
  }
};


module.exports.ClaimResponseSchema = ClaimResponseSchema;
module.exports.ClaimResponse = ClaimResponse;
