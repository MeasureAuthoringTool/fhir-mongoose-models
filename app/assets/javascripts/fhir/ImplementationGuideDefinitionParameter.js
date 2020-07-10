const { BackboneElementSchema } = require('./BackboneElement');
const { GuideParameterCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionParameterSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDefinitionParameterSchema.add(BackboneElementSchema);
ImplementationGuideDefinitionParameterSchema.remove('id');
ImplementationGuideDefinitionParameterSchema.add({
  code: GuideParameterCodeSchema,
  value: PrimitiveStringSchema,
});

module.exports.ImplementationGuideDefinitionParameterSchema = ImplementationGuideDefinitionParameterSchema;
