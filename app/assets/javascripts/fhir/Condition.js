const { AgeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ConditionEvidenceSchema } = require('./allSchemaHeaders.js');
const { ConditionStageSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConditionSchema } = require('./allSchemaHeaders.js');

ConditionSchema.add(DomainResourceSchema);
ConditionSchema.remove('id');
ConditionSchema.add({
  identifier: [IdentifierSchema],
  clinicalStatus: CodeableConceptSchema,
  verificationStatus: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  severity: CodeableConceptSchema,
  code: CodeableConceptSchema,
  bodySite: [CodeableConceptSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  onsetDateTime: PrimitiveDateTimeSchema,
  onsetAge: AgeSchema,
  onsetPeriod: PeriodSchema,
  onsetRange: RangeSchema,
  onsetString: PrimitiveStringSchema,
  abatementDateTime: PrimitiveDateTimeSchema,
  abatementAge: AgeSchema,
  abatementPeriod: PeriodSchema,
  abatementRange: RangeSchema,
  abatementString: PrimitiveStringSchema,
  recordedDate: PrimitiveDateTimeSchema,
  recorder: ReferenceSchema,
  asserter: ReferenceSchema,
  stage: [ConditionStageSchema],
  evidence: [ConditionEvidenceSchema],
  note: [AnnotationSchema],
});

module.exports.ConditionSchema = ConditionSchema;
