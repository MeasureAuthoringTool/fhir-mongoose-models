const { ElementSchema } = require('./Element');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');

ReferenceSchema.add(ElementSchema);
ReferenceSchema.remove('id');
ReferenceSchema.add({
  reference: PrimitiveStringSchema,
  type: PrimitiveUriSchema,
  identifier: IdentifierSchema,
  display: PrimitiveStringSchema,
});

module.exports.ReferenceSchema = ReferenceSchema;
