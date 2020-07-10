const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ActivityDefinitionDynamicValueSchema } = require('./allSchemaHeaders.js');

ActivityDefinitionDynamicValueSchema.add(BackboneElementSchema);
ActivityDefinitionDynamicValueSchema.remove('id');
ActivityDefinitionDynamicValueSchema.add({
  path: PrimitiveStringSchema,
  expression: ExpressionSchema,
});

module.exports.ActivityDefinitionDynamicValueSchema = ActivityDefinitionDynamicValueSchema;
