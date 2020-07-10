const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MediaStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MediaSchema } = require('./allSchemaHeaders.js');

MediaSchema.add(DomainResourceSchema);
MediaSchema.remove('id');
MediaSchema.add({
  identifier: [IdentifierSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: MediaStatusSchema,
  type: CodeableConceptSchema,
  modality: CodeableConceptSchema,
  view: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  createdDateTime: PrimitiveDateTimeSchema,
  createdPeriod: PeriodSchema,
  issued: PrimitiveInstantSchema,
  operator: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  bodySite: CodeableConceptSchema,
  deviceName: PrimitiveStringSchema,
  device: ReferenceSchema,
  height: PrimitivePositiveIntSchema,
  width: PrimitivePositiveIntSchema,
  frames: PrimitivePositiveIntSchema,
  duration: PrimitiveDecimalSchema,
  content: AttachmentSchema,
  note: [AnnotationSchema],
});

module.exports.MediaSchema = MediaSchema;
