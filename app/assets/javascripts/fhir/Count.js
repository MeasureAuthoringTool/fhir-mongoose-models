const { QuantitySchema } = require('./Quantity');
const { CountSchema } = require('./allSchemaHeaders.js');

CountSchema.add(QuantitySchema);
CountSchema.remove('id');
CountSchema.add({
});

module.exports.CountSchema = CountSchema;
