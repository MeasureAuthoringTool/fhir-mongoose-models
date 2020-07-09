const { AgeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { FamilyMemberHistoryConditionSchema } = require('./allSchemaHeaders.js');

FamilyMemberHistoryConditionSchema.add(BackboneElementSchema);
FamilyMemberHistoryConditionSchema.remove('id');
FamilyMemberHistoryConditionSchema.add({
  code: CodeableConceptSchema,
  outcome: CodeableConceptSchema,
  contributedToDeath: PrimitiveBooleanSchema,
  onsetAge: AgeSchema,
  onsetRange: RangeSchema,
  onsetPeriod: PeriodSchema,
  onsetString: PrimitiveStringSchema,
  note: [AnnotationSchema],
});

module.exports.FamilyMemberHistoryConditionSchema = FamilyMemberHistoryConditionSchema;
