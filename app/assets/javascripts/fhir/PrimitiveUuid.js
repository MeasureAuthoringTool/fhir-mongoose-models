const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUuidSchema } = require('./allSchemaHeaders.js');

PrimitiveUuidSchema.add(PrimitiveUriSchema);
PrimitiveUuidSchema.remove('id');
PrimitiveUuidSchema.add({
});

module.exports.PrimitiveUuidSchema = PrimitiveUuidSchema;
