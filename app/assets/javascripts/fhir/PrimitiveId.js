const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');

PrimitiveIdSchema.add(PrimitiveStringSchema);
PrimitiveIdSchema.remove('id');
PrimitiveIdSchema.add({
});

module.exports.PrimitiveIdSchema = PrimitiveIdSchema;
