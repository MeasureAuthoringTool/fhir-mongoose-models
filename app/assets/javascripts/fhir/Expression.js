const { ElementSchema } = require('./Element');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ExpressionSchema } = require('./allSchemaHeaders.js');

ExpressionSchema.add(ElementSchema);
ExpressionSchema.remove('id');
ExpressionSchema.add({
  description: PrimitiveStringSchema,
  name: PrimitiveIdSchema,
  language: PrimitiveCodeSchema,
  expression: PrimitiveStringSchema,
  reference: PrimitiveUriSchema,
});

module.exports.ExpressionSchema = ExpressionSchema;
