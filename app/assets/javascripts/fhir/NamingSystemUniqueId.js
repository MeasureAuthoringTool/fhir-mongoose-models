const { BackboneElementSchema } = require('./BackboneElement');
const { NamingSystemIdentifierTypeSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { NamingSystemUniqueIdSchema } = require('./allSchemaHeaders.js');

NamingSystemUniqueIdSchema.add(BackboneElementSchema);
NamingSystemUniqueIdSchema.remove('id');
NamingSystemUniqueIdSchema.add({
  type: NamingSystemIdentifierTypeSchema,
  value: PrimitiveStringSchema,
  preferred: PrimitiveBooleanSchema,
  comment: PrimitiveStringSchema,
  period: PeriodSchema,
});

module.exports.NamingSystemUniqueIdSchema = NamingSystemUniqueIdSchema;
