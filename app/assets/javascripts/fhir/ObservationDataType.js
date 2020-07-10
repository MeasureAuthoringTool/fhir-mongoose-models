const { ElementSchema } = require('./Element');
const { ObservationDataTypeSchema } = require('./allSchemaHeaders.js');

ObservationDataTypeSchema.add(ElementSchema);
ObservationDataTypeSchema.remove('id');
ObservationDataTypeSchema.add({
  value: String,
});

module.exports.ObservationDataTypeSchema = ObservationDataTypeSchema;
