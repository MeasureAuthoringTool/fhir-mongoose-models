const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionOverloadSchema } = require('./allSchemaHeaders.js');

OperationDefinitionOverloadSchema.add(BackboneElementSchema);
OperationDefinitionOverloadSchema.remove('id');
OperationDefinitionOverloadSchema.add({
  parameterName: [PrimitiveStringSchema],
  comment: PrimitiveStringSchema,
});

module.exports.OperationDefinitionOverloadSchema = OperationDefinitionOverloadSchema;
