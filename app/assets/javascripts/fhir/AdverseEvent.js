const { AdverseEventActualitySchema } = require('./allSchemaHeaders.js');
const { AdverseEventSuspectEntitySchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AdverseEventSchema } = require('./allSchemaHeaders.js');

AdverseEventSchema.add(DomainResourceSchema);
AdverseEventSchema.remove('id');
AdverseEventSchema.add({
  identifier: IdentifierSchema,
  actuality: AdverseEventActualitySchema,
  category: [CodeableConceptSchema],
  event: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  detected: PrimitiveDateTimeSchema,
  recordedDate: PrimitiveDateTimeSchema,
  resultingCondition: [ReferenceSchema],
  location: ReferenceSchema,
  seriousness: CodeableConceptSchema,
  severity: CodeableConceptSchema,
  outcome: CodeableConceptSchema,
  recorder: ReferenceSchema,
  contributor: [ReferenceSchema],
  suspectEntity: [AdverseEventSuspectEntitySchema],
  subjectMedicalHistory: [ReferenceSchema],
  referenceDocument: [ReferenceSchema],
  study: [ReferenceSchema],
});

module.exports.AdverseEventSchema = AdverseEventSchema;
