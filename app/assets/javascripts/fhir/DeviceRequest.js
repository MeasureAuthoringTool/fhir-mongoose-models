const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DeviceRequestParameterSchema } = require('./allSchemaHeaders.js');
const { DeviceRequestStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RequestIntentSchema } = require('./allSchemaHeaders.js');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { DeviceRequestSchema } = require('./allSchemaHeaders.js');

DeviceRequestSchema.add(DomainResourceSchema);
DeviceRequestSchema.remove('id');
DeviceRequestSchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  priorRequest: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  status: DeviceRequestStatusSchema,
  intent: RequestIntentSchema,
  priority: RequestPrioritySchema,
  codeReference: ReferenceSchema,
  codeCodeableConcept: CodeableConceptSchema,
  parameter: [DeviceRequestParameterSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  authoredOn: PrimitiveDateTimeSchema,
  requester: ReferenceSchema,
  performerType: CodeableConceptSchema,
  performer: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  insurance: [ReferenceSchema],
  supportingInfo: [ReferenceSchema],
  note: [AnnotationSchema],
  relevantHistory: [ReferenceSchema],
});

module.exports.DeviceRequestSchema = DeviceRequestSchema;
