const mongoose = require('mongoose/browser');
const { ActionCardinalityBehaviorSchema } = require('./ActionCardinalityBehavior');
const { ActionGroupingBehaviorSchema } = require('./ActionGroupingBehavior');
const { ActionPrecheckBehaviorSchema } = require('./ActionPrecheckBehavior');
const { ActionRequiredBehaviorSchema } = require('./ActionRequiredBehavior');
const { ActionSelectionBehaviorSchema } = require('./ActionSelectionBehavior');
const { AgeSchema } = require('./Age');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DurationSchema } = require('./Duration');
const { PeriodSchema } = require('./Period');
const { PlanDefinitionActionConditionSchema } = require('./PlanDefinitionActionCondition');
const { PlanDefinitionActionDynamicValueSchema } = require('./PlanDefinitionActionDynamicValue');
const { PlanDefinitionActionParticipantSchema } = require('./PlanDefinitionActionParticipant');
const { PlanDefinitionActionRelatedActionSchema } = require('./PlanDefinitionActionRelatedAction');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RequestPrioritySchema } = require('./RequestPriority');
const { TimingSchema } = require('./Timing');
const { TriggerDefinitionSchema } = require('./TriggerDefinition');

const PlanDefinitionActionSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'PlanDefinitionAction' },
  _type: { type: String, default: 'FHIR::PlanDefinitionAction' },
});

class PlanDefinitionAction extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionSchema);
    this.typeName = 'PlanDefinitionAction';
    this._type = 'FHIR::PlanDefinitionAction';
  }
}

module.exports.PlanDefinitionActionSchema = PlanDefinitionActionSchema;
module.exports.PlanDefinitionAction = PlanDefinitionAction;
