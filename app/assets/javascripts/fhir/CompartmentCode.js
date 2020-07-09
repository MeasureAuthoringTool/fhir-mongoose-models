const { ElementSchema } = require('./Element');
const { CompartmentCodeSchema } = require('./allSchemaHeaders.js');

CompartmentCodeSchema.add(ElementSchema);
CompartmentCodeSchema.remove('id');
CompartmentCodeSchema.add({
  value: String,
});

module.exports.CompartmentCodeSchema = CompartmentCodeSchema;
