const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionGroupingSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDefinitionGroupingSchema.add(BackboneElementSchema);
ImplementationGuideDefinitionGroupingSchema.remove('id');
ImplementationGuideDefinitionGroupingSchema.add({
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
});

module.exports.ImplementationGuideDefinitionGroupingSchema = ImplementationGuideDefinitionGroupingSchema;
