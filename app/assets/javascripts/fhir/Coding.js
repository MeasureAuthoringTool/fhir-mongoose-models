const { ElementSchema } = require('./Element');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');

CodingSchema.add(ElementSchema);
CodingSchema.remove('id');
CodingSchema.add({
  system: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  userSelected: PrimitiveBooleanSchema,
});

module.exports.CodingSchema = CodingSchema;
