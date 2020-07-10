const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { IdentifierUseSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');

IdentifierSchema.add(ElementSchema);
IdentifierSchema.remove('id');
IdentifierSchema.add({
  use: IdentifierUseSchema,
  type: CodeableConceptSchema,
  system: PrimitiveUriSchema,
  value: PrimitiveStringSchema,
  period: PeriodSchema,
  assigner: ReferenceSchema,
});

module.exports.IdentifierSchema = IdentifierSchema;
