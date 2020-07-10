const { ActionRelationshipTypeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionRelatedActionSchema } = require('./allSchemaHeaders.js');

PlanDefinitionActionRelatedActionSchema.add(BackboneElementSchema);
PlanDefinitionActionRelatedActionSchema.remove('id');
PlanDefinitionActionRelatedActionSchema.add({
  actionId: PrimitiveIdSchema,
  relationship: ActionRelationshipTypeSchema,
  offsetDuration: DurationSchema,
  offsetRange: RangeSchema,
});

module.exports.PlanDefinitionActionRelatedActionSchema = PlanDefinitionActionRelatedActionSchema;
