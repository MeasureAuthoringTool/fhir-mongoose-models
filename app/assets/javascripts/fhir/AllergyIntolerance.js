const { AgeSchema } = require('./allSchemaHeaders.js');
const { AllergyIntoleranceCategorySchema } = require('./allSchemaHeaders.js');
const { AllergyIntoleranceCriticalitySchema } = require('./allSchemaHeaders.js');
const { AllergyIntoleranceReactionSchema } = require('./allSchemaHeaders.js');
const { AllergyIntoleranceTypeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AllergyIntoleranceSchema } = require('./allSchemaHeaders.js');

AllergyIntoleranceSchema.add(DomainResourceSchema);
AllergyIntoleranceSchema.remove('id');
AllergyIntoleranceSchema.add({
  identifier: [IdentifierSchema],
  clinicalStatus: CodeableConceptSchema,
  verificationStatus: CodeableConceptSchema,
  type: AllergyIntoleranceTypeSchema,
  category: [AllergyIntoleranceCategorySchema],
  criticality: AllergyIntoleranceCriticalitySchema,
  code: CodeableConceptSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  onsetDateTime: PrimitiveDateTimeSchema,
  onsetAge: AgeSchema,
  onsetPeriod: PeriodSchema,
  onsetRange: RangeSchema,
  onsetString: PrimitiveStringSchema,
  recordedDate: PrimitiveDateTimeSchema,
  recorder: ReferenceSchema,
  asserter: ReferenceSchema,
  lastOccurrence: PrimitiveDateTimeSchema,
  note: [AnnotationSchema],
  reaction: [AllergyIntoleranceReactionSchema],
});

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
