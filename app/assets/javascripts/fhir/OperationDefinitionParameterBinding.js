const { BackboneElementSchema } = require('./BackboneElement');
const { BindingStrengthSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionParameterBindingSchema } = require('./allSchemaHeaders.js');

OperationDefinitionParameterBindingSchema.add(BackboneElementSchema);
OperationDefinitionParameterBindingSchema.remove('id');
OperationDefinitionParameterBindingSchema.add({
  strength: BindingStrengthSchema,
  valueSet: PrimitiveCanonicalSchema,
});

module.exports.OperationDefinitionParameterBindingSchema = OperationDefinitionParameterBindingSchema;
