const { ConstraintSeveritySchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionConstraintSchema } = require('./allSchemaHeaders.js');

ElementDefinitionConstraintSchema.add(ElementSchema);
ElementDefinitionConstraintSchema.remove('id');
ElementDefinitionConstraintSchema.add({
  key: PrimitiveIdSchema,
  requirements: PrimitiveStringSchema,
  severity: ConstraintSeveritySchema,
  human: PrimitiveStringSchema,
  expression: PrimitiveStringSchema,
  xpath: PrimitiveStringSchema,
  source: PrimitiveCanonicalSchema,
});

module.exports.ElementDefinitionConstraintSchema = ElementDefinitionConstraintSchema;
