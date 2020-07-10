const { ActionCardinalityBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionGroupingBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionPrecheckBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionRequiredBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionSelectionBehaviorSchema } = require('./allSchemaHeaders.js');
const { AgeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DataRequirementSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionConditionSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionDynamicValueSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionParticipantSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionRelatedActionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { TriggerDefinitionSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionSchema } = require('./allSchemaHeaders.js');

PlanDefinitionActionSchema.add(BackboneElementSchema);
PlanDefinitionActionSchema.remove('id');
PlanDefinitionActionSchema.add({
  prefix: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  textEquivalent: PrimitiveStringSchema,
  priority: RequestPrioritySchema,
  code: [CodeableConceptSchema],
  reason: [CodeableConceptSchema],
  documentation: [RelatedArtifactSchema],
  goalId: [PrimitiveIdSchema],
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  trigger: [TriggerDefinitionSchema],
  condition: [PlanDefinitionActionConditionSchema],
  input: [DataRequirementSchema],
  output: [DataRequirementSchema],
  relatedAction: [PlanDefinitionActionRelatedActionSchema],
  timingDateTime: PrimitiveDateTimeSchema,
  timingAge: AgeSchema,
  timingPeriod: PeriodSchema,
  timingDuration: DurationSchema,
  timingRange: RangeSchema,
  timingTiming: TimingSchema,
  participant: [PlanDefinitionActionParticipantSchema],
  type: CodeableConceptSchema,
  groupingBehavior: ActionGroupingBehaviorSchema,
  selectionBehavior: ActionSelectionBehaviorSchema,
  requiredBehavior: ActionRequiredBehaviorSchema,
  precheckBehavior: ActionPrecheckBehaviorSchema,
  cardinalityBehavior: ActionCardinalityBehaviorSchema,
  definitionCanonical: PrimitiveCanonicalSchema,
  definitionUri: PrimitiveUriSchema,
  transform: PrimitiveCanonicalSchema,
  dynamicValue: [PlanDefinitionActionDynamicValueSchema],
  action: [PlanDefinitionActionSchema],
});

module.exports.PlanDefinitionActionSchema = PlanDefinitionActionSchema;
