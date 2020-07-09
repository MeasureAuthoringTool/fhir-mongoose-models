const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');

PrimitiveUnsignedIntSchema.add(PrimitiveIntegerSchema);
PrimitiveUnsignedIntSchema.remove('id');
PrimitiveUnsignedIntSchema.add({
});

module.exports.PrimitiveUnsignedIntSchema = PrimitiveUnsignedIntSchema;
