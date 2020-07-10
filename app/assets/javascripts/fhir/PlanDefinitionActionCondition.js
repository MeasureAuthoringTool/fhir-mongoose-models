const { ActionConditionKindSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionConditionSchema } = require('./allSchemaHeaders.js');

PlanDefinitionActionConditionSchema.add(BackboneElementSchema);
PlanDefinitionActionConditionSchema.remove('id');
PlanDefinitionActionConditionSchema.add({
  kind: ActionConditionKindSchema,
  expression: ExpressionSchema,
});

module.exports.PlanDefinitionActionConditionSchema = PlanDefinitionActionConditionSchema;
