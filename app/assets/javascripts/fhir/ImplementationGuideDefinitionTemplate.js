const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionTemplateSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDefinitionTemplateSchema.add(BackboneElementSchema);
ImplementationGuideDefinitionTemplateSchema.remove('id');
ImplementationGuideDefinitionTemplateSchema.add({
  code: PrimitiveCodeSchema,
  source: PrimitiveStringSchema,
  scope: PrimitiveStringSchema,
});

module.exports.ImplementationGuideDefinitionTemplateSchema = ImplementationGuideDefinitionTemplateSchema;
