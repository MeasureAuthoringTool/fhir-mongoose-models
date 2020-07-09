const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CommunicationPayloadSchema } = require('./allSchemaHeaders.js');
const { CommunicationPrioritySchema } = require('./allSchemaHeaders.js');
const { CommunicationStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CommunicationSchema } = require('./allSchemaHeaders.js');

CommunicationSchema.add(DomainResourceSchema);
CommunicationSchema.remove('id');
CommunicationSchema.add({
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
});

module.exports.CommunicationSchema = CommunicationSchema;
