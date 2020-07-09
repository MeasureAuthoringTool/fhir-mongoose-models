const { ElementSchema } = require('./Element');
const { ObservationStatusSchema } = require('./allSchemaHeaders.js');

ObservationStatusSchema.add(ElementSchema);
ObservationStatusSchema.remove('id');
ObservationStatusSchema.add({
  value: String,
});

module.exports.ObservationStatusSchema = ObservationStatusSchema;
