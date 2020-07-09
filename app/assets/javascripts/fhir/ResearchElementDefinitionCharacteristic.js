const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { GroupMeasureSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ResearchElementDefinitionCharacteristicSchema } = require('./allSchemaHeaders.js');

ResearchElementDefinitionCharacteristicSchema.add(BackboneElementSchema);
ResearchElementDefinitionCharacteristicSchema.remove('id');
ResearchElementDefinitionCharacteristicSchema.add({
  definitionCodeableConcept: CodeableConceptSchema,
  definitionCanonical: PrimitiveCanonicalSchema,
  definitionExpression: ExpressionSchema,
  definitionDataRequirement: DataRequirementSchema,
  usageContext: [UsageContextSchema],
  exclude: PrimitiveBooleanSchema,
  unitOfMeasure: CodeableConceptSchema,
  studyEffectiveDescription: PrimitiveStringSchema,
  studyEffectiveDateTime: PrimitiveDateTimeSchema,
  studyEffectivePeriod: PeriodSchema,
  studyEffectiveDuration: DurationSchema,
  studyEffectiveTiming: TimingSchema,
  studyEffectiveTimeFromStart: DurationSchema,
  studyEffectiveGroupMeasure: GroupMeasureSchema,
  participantEffectiveDescription: PrimitiveStringSchema,
  participantEffectiveDateTime: PrimitiveDateTimeSchema,
  participantEffectivePeriod: PeriodSchema,
  participantEffectiveDuration: DurationSchema,
  participantEffectiveTiming: TimingSchema,
  participantEffectiveTimeFromStart: DurationSchema,
  participantEffectiveGroupMeasure: GroupMeasureSchema,
});

module.exports.ResearchElementDefinitionCharacteristicSchema = ResearchElementDefinitionCharacteristicSchema;
