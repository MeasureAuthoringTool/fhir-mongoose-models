const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');

PrimitiveCodeSchema.add(PrimitiveStringSchema);
PrimitiveCodeSchema.remove('id');
PrimitiveCodeSchema.add({
});

module.exports.PrimitiveCodeSchema = PrimitiveCodeSchema;
