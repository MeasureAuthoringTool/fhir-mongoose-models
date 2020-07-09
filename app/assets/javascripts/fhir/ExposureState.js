const { ElementSchema } = require('./Element');
const { ExposureStateSchema } = require('./allSchemaHeaders.js');

ExposureStateSchema.add(ElementSchema);
ExposureStateSchema.remove('id');
ExposureStateSchema.add({
  value: String,
});

module.exports.ExposureStateSchema = ExposureStateSchema;
