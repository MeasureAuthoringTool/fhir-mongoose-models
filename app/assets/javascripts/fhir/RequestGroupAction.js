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
const { DurationSchema } = require('./Duration');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RequestGroupActionConditionSchema } = require('./RequestGroupActionCondition');
const { RequestGroupActionRelatedActionSchema } = require('./RequestGroupActionRelatedAction');
const { RequestPrioritySchema } = require('./RequestPriority');
const { TimingSchema } = require('./Timing');

const RequestGroupActionSchema = BackboneElementSchemaFunction({
  prefix: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  textEquivalent: PrimitiveStringSchema,
  priority: RequestPrioritySchema,
  code: [CodeableConceptSchema],
  documentation: [RelatedArtifactSchema],
  condition: [RequestGroupActionConditionSchema],
  relatedAction: [RequestGroupActionRelatedActionSchema],
  timingDateTime: PrimitiveDateTimeSchema,
  timingAge: AgeSchema,
  timingPeriod: PeriodSchema,
  timingDuration: DurationSchema,
  timingRange: RangeSchema,
  timingTiming: TimingSchema,
  participant: [ReferenceSchema],
  type: CodeableConceptSchema,
  groupingBehavior: ActionGroupingBehaviorSchema,
  selectionBehavior: ActionSelectionBehaviorSchema,
  requiredBehavior: ActionRequiredBehaviorSchema,
  precheckBehavior: ActionPrecheckBehaviorSchema,
  cardinalityBehavior: ActionCardinalityBehaviorSchema,
  resource: ReferenceSchema,
  action: [RequestGroupActionSchema],
  typeName: { type: String, default: 'RequestGroupAction' },
  _type: { type: String, default: 'FHIR::RequestGroupAction' },
});

class RequestGroupAction extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupActionSchema);
    this.typeName = 'RequestGroupAction';
    this._type = 'FHIR::RequestGroupAction';
  }
}

module.exports.RequestGroupActionSchema = RequestGroupActionSchema;
module.exports.RequestGroupAction = RequestGroupAction;
