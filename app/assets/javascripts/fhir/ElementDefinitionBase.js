const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionBaseSchema } = require('./allSchemaHeaders.js');

ElementDefinitionBaseSchema.add(ElementSchema);
ElementDefinitionBaseSchema.remove('id');
ElementDefinitionBaseSchema.add({
  path: PrimitiveStringSchema,
  min: PrimitiveUnsignedIntSchema,
  max: PrimitiveStringSchema,
});

module.exports.ElementDefinitionBaseSchema = ElementDefinitionBaseSchema;
