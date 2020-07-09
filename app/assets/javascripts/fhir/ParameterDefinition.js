const { ElementSchema } = require('./Element');
const { FHIRAllTypesSchema } = require('./allSchemaHeaders.js');
const { ParameterUseSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ParameterDefinitionSchema } = require('./allSchemaHeaders.js');

ParameterDefinitionSchema.add(ElementSchema);
ParameterDefinitionSchema.remove('id');
ParameterDefinitionSchema.add({
  name: PrimitiveCodeSchema,
  use: ParameterUseSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  documentation: PrimitiveStringSchema,
  type: FHIRAllTypesSchema,
  profile: PrimitiveCanonicalSchema,
});

module.exports.ParameterDefinitionSchema = ParameterDefinitionSchema;
