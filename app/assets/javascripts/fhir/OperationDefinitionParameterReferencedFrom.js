const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionParameterReferencedFromSchema } = require('./allSchemaHeaders.js');

OperationDefinitionParameterReferencedFromSchema.add(BackboneElementSchema);
OperationDefinitionParameterReferencedFromSchema.remove('id');
OperationDefinitionParameterReferencedFromSchema.add({
  source: PrimitiveStringSchema,
  sourceId: PrimitiveStringSchema,
});

module.exports.OperationDefinitionParameterReferencedFromSchema = OperationDefinitionParameterReferencedFromSchema;
