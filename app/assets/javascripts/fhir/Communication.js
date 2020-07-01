const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CommunicationPayloadSchema } = require('./CommunicationPayload');
const { CommunicationPrioritySchema } = require('./CommunicationPriority');
const { CommunicationStatusSchema } = require('./CommunicationStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const CommunicationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  inResponseTo: [ReferenceSchema],
  status: CommunicationStatusSchema,
  statusReason: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  priority: CommunicationPrioritySchema,
  medium: [CodeableConceptSchema],
  subject: ReferenceSchema,
  topic: CodeableConceptSchema,
  about: [ReferenceSchema],
  encounter: ReferenceSchema,
  sent: PrimitiveDateTimeSchema,
  received: PrimitiveDateTimeSchema,
  recipient: [ReferenceSchema],
  sender: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  payload: [CommunicationPayloadSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'Communication' },
  _type: { type: String, default: 'FHIR::Communication' },
});

class Communication extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationSchema);
    this.typeName = 'Communication';
    this._type = 'FHIR::Communication';
  }
}

module.exports.CommunicationSchema = CommunicationSchema;
module.exports.Communication = Communication;
