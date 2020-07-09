const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveOidSchema } = require('./allSchemaHeaders.js');

PrimitiveOidSchema.add(PrimitiveUriSchema);
PrimitiveOidSchema.remove('id');
PrimitiveOidSchema.add({
});

module.exports.PrimitiveOidSchema = PrimitiveOidSchema;
