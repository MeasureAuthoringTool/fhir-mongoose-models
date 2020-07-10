const { BackboneElementSchema } = require('./BackboneElement');
const { GraphDefinitionLinkSchema } = require('./allSchemaHeaders.js');
const { GraphDefinitionLinkTargetCompartmentSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { GraphDefinitionLinkTargetSchema } = require('./allSchemaHeaders.js');

GraphDefinitionLinkTargetSchema.add(BackboneElementSchema);
GraphDefinitionLinkTargetSchema.remove('id');
GraphDefinitionLinkTargetSchema.add({
  type: ResourceTypeSchema,
  params: PrimitiveStringSchema,
  profile: PrimitiveCanonicalSchema,
  compartment: [GraphDefinitionLinkTargetCompartmentSchema],
  link: [GraphDefinitionLinkSchema],
});

module.exports.GraphDefinitionLinkTargetSchema = GraphDefinitionLinkTargetSchema;
