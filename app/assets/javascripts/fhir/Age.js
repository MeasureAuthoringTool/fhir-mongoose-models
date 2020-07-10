const { QuantitySchema } = require('./Quantity');
const { AgeSchema } = require('./allSchemaHeaders.js');

AgeSchema.add(QuantitySchema);
AgeSchema.remove('id');
AgeSchema.add({
});

module.exports.AgeSchema = AgeSchema;
