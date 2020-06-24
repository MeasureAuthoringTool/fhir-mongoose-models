const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CommunicationPrioritySchema } = require('./CommunicationPriority');
const { CommunicationRequestPayloadSchema } = require('./CommunicationRequestPayload');
const { CommunicationRequestStatusSchema } = require('./CommunicationRequestStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CommunicationRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   replaces : [ReferenceSchema],
   groupIdentifier : IdentifierSchema,
   status : CommunicationRequestStatusSchema,
   statusReason : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   priority : CommunicationPrioritySchema,
   doNotPerform : Boolean,
   medium : [CodeableConceptSchema],
   subject : ReferenceSchema,
   about : [ReferenceSchema],
   encounter : ReferenceSchema,
   payload : [CommunicationRequestPayloadSchema],
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   authoredOn : DateTime,
   requester : ReferenceSchema,
   recipient : [ReferenceSchema],
   sender : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'CommunicationRequest' },
});

class CommunicationRequest extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationRequestSchema);
    this._type = 'FHIR::CommunicationRequest';
  }
};


module.exports.CommunicationRequestSchema = CommunicationRequestSchema;
module.exports.CommunicationRequest = CommunicationRequest;
