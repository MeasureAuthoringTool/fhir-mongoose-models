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
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { TriggerDefinitionSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { EvidenceVariableCharacteristicSchema } = require('./allSchemaHeaders.js');

EvidenceVariableCharacteristicSchema.add(BackboneElementSchema);
EvidenceVariableCharacteristicSchema.remove('id');
EvidenceVariableCharacteristicSchema.add({
  description: PrimitiveStringSchema,
  definitionReference: ReferenceSchema,
  definitionCanonical: PrimitiveCanonicalSchema,
  definitionCodeableConcept: CodeableConceptSchema,
  definitionExpression: ExpressionSchema,
  definitionDataRequirement: DataRequirementSchema,
  definitionTriggerDefinition: TriggerDefinitionSchema,
  usageContext: [UsageContextSchema],
  exclude: PrimitiveBooleanSchema,
  participantEffectiveDateTime: PrimitiveDateTimeSchema,
  participantEffectivePeriod: PeriodSchema,
  participantEffectiveDuration: DurationSchema,
  participantEffectiveTiming: TimingSchema,
  timeFromStart: DurationSchema,
  groupMeasure: GroupMeasureSchema,
});

module.exports.EvidenceVariableCharacteristicSchema = EvidenceVariableCharacteristicSchema;
