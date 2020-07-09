const { BackboneElementSchema } = require('./BackboneElement');
const { GraphDefinitionLinkTargetSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { GraphDefinitionLinkSchema } = require('./allSchemaHeaders.js');

GraphDefinitionLinkSchema.add(BackboneElementSchema);
GraphDefinitionLinkSchema.remove('id');
GraphDefinitionLinkSchema.add({
  path: PrimitiveStringSchema,
  sliceName: PrimitiveStringSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  target: [GraphDefinitionLinkTargetSchema],
});

module.exports.GraphDefinitionLinkSchema = GraphDefinitionLinkSchema;
