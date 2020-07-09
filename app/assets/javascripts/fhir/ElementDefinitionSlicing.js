const { ElementSchema } = require('./Element');
const { ElementDefinitionSlicingDiscriminatorSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SlicingRulesSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionSlicingSchema } = require('./allSchemaHeaders.js');

ElementDefinitionSlicingSchema.add(ElementSchema);
ElementDefinitionSlicingSchema.remove('id');
ElementDefinitionSlicingSchema.add({
  discriminator: [ElementDefinitionSlicingDiscriminatorSchema],
  description: PrimitiveStringSchema,
  ordered: PrimitiveBooleanSchema,
  rules: SlicingRulesSchema,
});

module.exports.ElementDefinitionSlicingSchema = ElementDefinitionSlicingSchema;
