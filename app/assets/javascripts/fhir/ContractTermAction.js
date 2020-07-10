const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContractTermActionSubjectSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { ContractTermActionSchema } = require('./allSchemaHeaders.js');

ContractTermActionSchema.add(BackboneElementSchema);
ContractTermActionSchema.remove('id');
ContractTermActionSchema.add({
  doNotPerform: PrimitiveBooleanSchema,
  type: CodeableConceptSchema,
  subject: [ContractTermActionSubjectSchema],
  intent: CodeableConceptSchema,
  linkId: [PrimitiveStringSchema],
  status: CodeableConceptSchema,
  context: ReferenceSchema,
  contextLinkId: [PrimitiveStringSchema],
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  occurrenceTiming: TimingSchema,
  requester: [ReferenceSchema],
  requesterLinkId: [PrimitiveStringSchema],
  performerType: [CodeableConceptSchema],
  performerRole: CodeableConceptSchema,
  performer: ReferenceSchema,
  performerLinkId: [PrimitiveStringSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  reason: [PrimitiveStringSchema],
  reasonLinkId: [PrimitiveStringSchema],
  note: [AnnotationSchema],
  securityLabelNumber: [PrimitiveUnsignedIntSchema],
});

module.exports.ContractTermActionSchema = ContractTermActionSchema;
