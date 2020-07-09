const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');

PrimitivePositiveIntSchema.add(PrimitiveIntegerSchema);
PrimitivePositiveIntSchema.remove('id');
PrimitivePositiveIntSchema.add({
});

module.exports.PrimitivePositiveIntSchema = PrimitivePositiveIntSchema;
