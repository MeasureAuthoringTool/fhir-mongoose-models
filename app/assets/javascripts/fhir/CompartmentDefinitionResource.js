const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { CompartmentDefinitionResourceSchema } = require('./allSchemaHeaders.js');

CompartmentDefinitionResourceSchema.add(BackboneElementSchema);
CompartmentDefinitionResourceSchema.remove('id');
CompartmentDefinitionResourceSchema.add({
  code: ResourceTypeSchema,
  param: [PrimitiveStringSchema],
  documentation: PrimitiveStringSchema,
});

module.exports.CompartmentDefinitionResourceSchema = CompartmentDefinitionResourceSchema;
