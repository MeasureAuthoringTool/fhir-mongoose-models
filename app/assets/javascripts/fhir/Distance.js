const { QuantitySchema } = require('./Quantity');
const { DistanceSchema } = require('./allSchemaHeaders.js');

DistanceSchema.add(QuantitySchema);
DistanceSchema.remove('id');
DistanceSchema.add({
});

module.exports.DistanceSchema = DistanceSchema;
