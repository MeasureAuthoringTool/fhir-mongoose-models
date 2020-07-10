const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CommunicationPrioritySchema } = require('./allSchemaHeaders.js');
const { CommunicationRequestPayloadSchema } = require('./allSchemaHeaders.js');
const { CommunicationRequestStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CommunicationRequestSchema } = require('./allSchemaHeaders.js');

CommunicationRequestSchema.add(DomainResourceSchema);
CommunicationRequestSchema.remove('id');
CommunicationRequestSchema.add({
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
});

module.exports.CommunicationRequestSchema = CommunicationRequestSchema;
