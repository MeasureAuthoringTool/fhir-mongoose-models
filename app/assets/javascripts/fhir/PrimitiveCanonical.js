const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');

PrimitiveCanonicalSchema.add(PrimitiveUriSchema);
PrimitiveCanonicalSchema.remove('id');
PrimitiveCanonicalSchema.add({
});

module.exports.PrimitiveCanonicalSchema = PrimitiveCanonicalSchema;
