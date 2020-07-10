const { ElementSchema } = require('./Element');
const { AggregationModeSchema } = require('./allSchemaHeaders.js');

AggregationModeSchema.add(ElementSchema);
AggregationModeSchema.remove('id');
AggregationModeSchema.add({
  value: String,
});

module.exports.AggregationModeSchema = AggregationModeSchema;
