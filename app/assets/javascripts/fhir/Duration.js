const { QuantitySchema } = require('./Quantity');
const { DurationSchema } = require('./allSchemaHeaders.js');

DurationSchema.add(QuantitySchema);
DurationSchema.remove('id');
DurationSchema.add({
});

module.exports.DurationSchema = DurationSchema;
