const { AgeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FamilyHistoryStatusSchema } = require('./allSchemaHeaders.js');
const { FamilyMemberHistoryConditionSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { FamilyMemberHistorySchema } = require('./allSchemaHeaders.js');

FamilyMemberHistorySchema.add(DomainResourceSchema);
FamilyMemberHistorySchema.remove('id');
FamilyMemberHistorySchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  status: FamilyHistoryStatusSchema,
  dataAbsentReason: CodeableConceptSchema,
  patient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  name: PrimitiveStringSchema,
  relationship: CodeableConceptSchema,
  sex: CodeableConceptSchema,
  bornPeriod: PeriodSchema,
  bornDate: PrimitiveDateSchema,
  bornString: PrimitiveStringSchema,
  ageAge: AgeSchema,
  ageRange: RangeSchema,
  ageString: PrimitiveStringSchema,
  estimatedAge: PrimitiveBooleanSchema,
  deceasedBoolean: PrimitiveBooleanSchema,
  deceasedAge: AgeSchema,
  deceasedRange: RangeSchema,
  deceasedDate: PrimitiveDateSchema,
  deceasedString: PrimitiveStringSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  condition: [FamilyMemberHistoryConditionSchema],
});

module.exports.FamilyMemberHistorySchema = FamilyMemberHistorySchema;
