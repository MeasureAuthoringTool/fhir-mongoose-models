const { ElementSchema } = require('./Element');
const { ObservationRangeCategorySchema } = require('./allSchemaHeaders.js');

ObservationRangeCategorySchema.add(ElementSchema);
ObservationRangeCategorySchema.remove('id');
ObservationRangeCategorySchema.add({
  value: String,
});

module.exports.ObservationRangeCategorySchema = ObservationRangeCategorySchema;
