const { ElementSchema } = require('./Element');
const { QuantityComparatorSchema } = require('./allSchemaHeaders.js');

QuantityComparatorSchema.add(ElementSchema);
QuantityComparatorSchema.remove('id');
QuantityComparatorSchema.add({
  value: String,
});

module.exports.QuantityComparatorSchema = QuantityComparatorSchema;
