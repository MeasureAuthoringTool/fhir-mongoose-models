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
const { DurationSchema } = require('./Duration');
const { PeriodSchema } = require('./Period');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RequestGroupActionConditionSchema } = require('./RequestGroupActionCondition');
const { RequestGroupActionRelatedActionSchema } = require('./RequestGroupActionRelatedAction');
const { RequestPrioritySchema } = require('./RequestPriority');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RequestGroupActionSchema = BackboneElementSchemaFunction({
   prefix : String,
   title : String,
   description : String,
   textEquivalent : String,
   priority : RequestPrioritySchema,
   code : [CodeableConceptSchema],
   documentation : [RelatedArtifactSchema],
   condition : [RequestGroupActionConditionSchema],
   relatedAction : [RequestGroupActionRelatedActionSchema],
   timingDateTime : DateTime,
   timingAge : AgeSchema,
   timingPeriod : PeriodSchema,
   timingDuration : DurationSchema,
   timingRange : RangeSchema,
   timingTiming : TimingSchema,
   participant : [ReferenceSchema],
   type : CodeableConceptSchema,
   groupingBehavior : ActionGroupingBehaviorSchema,
   selectionBehavior : ActionSelectionBehaviorSchema,
   requiredBehavior : ActionRequiredBehaviorSchema,
   precheckBehavior : ActionPrecheckBehaviorSchema,
   cardinalityBehavior : ActionCardinalityBehaviorSchema,
   resource : ReferenceSchema,
   action : [RequestGroupActionSchema],
   fhirTitle: { type: String, default: 'RequestGroupAction' },
});

class RequestGroupAction extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupActionSchema);
    this._type = 'FHIR::RequestGroupAction';
  }
};


module.exports.RequestGroupActionSchema = RequestGroupActionSchema;
module.exports.RequestGroupAction = RequestGroupAction;
