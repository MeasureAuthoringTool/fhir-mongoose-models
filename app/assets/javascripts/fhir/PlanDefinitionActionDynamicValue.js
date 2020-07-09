const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PlanDefinitionActionDynamicValueSchema } = require('./allSchemaHeaders.js');

PlanDefinitionActionDynamicValueSchema.add(BackboneElementSchema);
PlanDefinitionActionDynamicValueSchema.remove('id');
PlanDefinitionActionDynamicValueSchema.add({
  path: PrimitiveStringSchema,
  expression: ExpressionSchema,
});

module.exports.PlanDefinitionActionDynamicValueSchema = PlanDefinitionActionDynamicValueSchema;
