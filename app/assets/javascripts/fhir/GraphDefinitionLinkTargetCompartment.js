const { BackboneElementSchema } = require('./BackboneElement');
const { CompartmentCodeSchema } = require('./allSchemaHeaders.js');
const { GraphCompartmentRuleSchema } = require('./allSchemaHeaders.js');
const { GraphCompartmentUseSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { GraphDefinitionLinkTargetCompartmentSchema } = require('./allSchemaHeaders.js');

GraphDefinitionLinkTargetCompartmentSchema.add(BackboneElementSchema);
GraphDefinitionLinkTargetCompartmentSchema.remove('id');
GraphDefinitionLinkTargetCompartmentSchema.add({
  use: GraphCompartmentUseSchema,
  code: CompartmentCodeSchema,
  rule: GraphCompartmentRuleSchema,
  expression: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
});

module.exports.GraphDefinitionLinkTargetCompartmentSchema = GraphDefinitionLinkTargetCompartmentSchema;
