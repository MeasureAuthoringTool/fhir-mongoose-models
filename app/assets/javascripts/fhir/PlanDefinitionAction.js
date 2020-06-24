const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { ActionCardinalityBehaviorSchema } = require('./ActionCardinalityBehavior');
const { ActionGroupingBehaviorSchema } = require('./ActionGroupingBehavior');
const { ActionPrecheckBehaviorSchema } = require('./ActionPrecheckBehavior');
const { ActionRequiredBehaviorSchema } = require('./ActionRequiredBehavior');
const { ActionSelectionBehaviorSchema } = require('./ActionSelectionBehavior');
const { AgeSchema } = require('./Age');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DataRequirementSchema } = require('./DataRequirement');
const { DurationSchema } = require('./Duration');
const { PeriodSchema } = require('./Period');
const { PlanDefinitionActionConditionSchema } = require('./PlanDefinitionActionCondition');
const { PlanDefinitionActionDynamicValueSchema } = require('./PlanDefinitionActionDynamicValue');
const { PlanDefinitionActionParticipantSchema } = require('./PlanDefinitionActionParticipant');
const { PlanDefinitionActionRelatedActionSchema } = require('./PlanDefinitionActionRelatedAction');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RequestPrioritySchema } = require('./RequestPriority');
const { TimingSchema } = require('./Timing');
const { TriggerDefinitionSchema } = require('./TriggerDefinition');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionActionSchema = BackboneElementSchemaFunction({
   prefix : String,
   title : String,
   description : String,
   textEquivalent : String,
   priority : RequestPrioritySchema,
   code : [CodeableConceptSchema],
   reason : [CodeableConceptSchema],
   documentation : [RelatedArtifactSchema],
   goalId : [String],
   subjectCodeableConcept : CodeableConceptSchema,
   subjectReference : ReferenceSchema,
   trigger : [TriggerDefinitionSchema],
   condition : [PlanDefinitionActionConditionSchema],
   input : [DataRequirementSchema],
   output : [DataRequirementSchema],
   relatedAction : [PlanDefinitionActionRelatedActionSchema],
   timingDateTime : DateTime,
   timingAge : AgeSchema,
   timingPeriod : PeriodSchema,
   timingDuration : DurationSchema,
   timingRange : RangeSchema,
   timingTiming : TimingSchema,
   participant : [PlanDefinitionActionParticipantSchema],
   type : CodeableConceptSchema,
   groupingBehavior : ActionGroupingBehaviorSchema,
   selectionBehavior : ActionSelectionBehaviorSchema,
   requiredBehavior : ActionRequiredBehaviorSchema,
   precheckBehavior : ActionPrecheckBehaviorSchema,
   cardinalityBehavior : ActionCardinalityBehaviorSchema,
   definitionCanonical : String,
   definitionUri : String,
   transform : String,
   dynamicValue : [PlanDefinitionActionDynamicValueSchema],
   action : [PlanDefinitionActionSchema],
   fhirTitle: { type: String, default: 'PlanDefinitionAction' },
});

class PlanDefinitionAction extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionSchema);
    this._type = 'FHIR::PlanDefinitionAction';
  }
};


module.exports.PlanDefinitionActionSchema = PlanDefinitionActionSchema;
module.exports.PlanDefinitionAction = PlanDefinitionAction;
