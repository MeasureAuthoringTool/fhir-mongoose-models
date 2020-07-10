const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');

PrimitiveUrlSchema.add(PrimitiveUriSchema);
PrimitiveUrlSchema.remove('id');
PrimitiveUrlSchema.add({
});

module.exports.PrimitiveUrlSchema = PrimitiveUrlSchema;
