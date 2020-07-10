const { DiscriminatorTypeSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionSlicingDiscriminatorSchema } = require('./allSchemaHeaders.js');

ElementDefinitionSlicingDiscriminatorSchema.add(ElementSchema);
ElementDefinitionSlicingDiscriminatorSchema.remove('id');
ElementDefinitionSlicingDiscriminatorSchema.add({
  type: DiscriminatorTypeSchema,
  path: PrimitiveStringSchema,
});

module.exports.ElementDefinitionSlicingDiscriminatorSchema = ElementDefinitionSlicingDiscriminatorSchema;
