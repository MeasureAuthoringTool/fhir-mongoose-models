const { BackboneElementSchema } = require('./BackboneElement');
const { FHIRAllTypesSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionParameterBindingSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionParameterReferencedFromSchema } = require('./allSchemaHeaders.js');
const { OperationParameterUseSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SearchParamTypeSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionParameterSchema } = require('./allSchemaHeaders.js');

OperationDefinitionParameterSchema.add(BackboneElementSchema);
OperationDefinitionParameterSchema.remove('id');
OperationDefinitionParameterSchema.add({
  name: PrimitiveCodeSchema,
  use: OperationParameterUseSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  documentation: PrimitiveStringSchema,
  type: FHIRAllTypesSchema,
  targetProfile: [PrimitiveCanonicalSchema],
  searchType: SearchParamTypeSchema,
  binding: OperationDefinitionParameterBindingSchema,
  referencedFrom: [OperationDefinitionParameterReferencedFromSchema],
  part: [OperationDefinitionParameterSchema],
});

module.exports.OperationDefinitionParameterSchema = OperationDefinitionParameterSchema;
