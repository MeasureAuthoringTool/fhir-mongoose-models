const { ActionCardinalityBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionGroupingBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionPrecheckBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionRequiredBehaviorSchema } = require('./allSchemaHeaders.js');
const { ActionSelectionBehaviorSchema } = require('./allSchemaHeaders.js');
const { AgeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { RequestGroupActionConditionSchema } = require('./allSchemaHeaders.js');
const { RequestGroupActionRelatedActionSchema } = require('./allSchemaHeaders.js');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { RequestGroupActionSchema } = require('./allSchemaHeaders.js');

RequestGroupActionSchema.add(BackboneElementSchema);
RequestGroupActionSchema.remove('id');
RequestGroupActionSchema.add({
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
});

module.exports.RequestGroupActionSchema = RequestGroupActionSchema;
