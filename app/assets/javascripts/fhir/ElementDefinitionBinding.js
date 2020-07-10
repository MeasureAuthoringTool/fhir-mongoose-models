const { BindingStrengthSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionBindingSchema } = require('./allSchemaHeaders.js');

ElementDefinitionBindingSchema.add(ElementSchema);
ElementDefinitionBindingSchema.remove('id');
ElementDefinitionBindingSchema.add({
  strength: BindingStrengthSchema,
  description: PrimitiveStringSchema,
  valueSet: PrimitiveCanonicalSchema,
});

module.exports.ElementDefinitionBindingSchema = ElementDefinitionBindingSchema;
