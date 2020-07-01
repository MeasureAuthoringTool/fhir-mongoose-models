const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CommunicationPrioritySchema } = require('./CommunicationPriority');
const { CommunicationRequestPayloadSchema } = require('./CommunicationRequestPayload');
const { CommunicationRequestStatusSchema } = require('./CommunicationRequestStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const CommunicationRequestSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  replaces: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  status: CommunicationRequestStatusSchema,
  statusReason: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  priority: CommunicationPrioritySchema,
  doNotPerform: PrimitiveBooleanSchema,
  medium: [CodeableConceptSchema],
  subject: ReferenceSchema,
  about: [ReferenceSchema],
  encounter: ReferenceSchema,
  payload: [CommunicationRequestPayloadSchema],
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  recipient: [ReferenceSchema],
  sender: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'CommunicationRequest' },
  _type: { type: String, default: 'FHIR::CommunicationRequest' },
});

class CommunicationRequest extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationRequestSchema);
    this.typeName = 'CommunicationRequest';
    this._type = 'FHIR::CommunicationRequest';
  }
}

module.exports.CommunicationRequestSchema = CommunicationRequestSchema;
module.exports.CommunicationRequest = CommunicationRequest;
