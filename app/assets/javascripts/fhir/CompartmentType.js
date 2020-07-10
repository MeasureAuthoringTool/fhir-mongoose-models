const { ElementSchema } = require('./Element');
const { CompartmentTypeSchema } = require('./allSchemaHeaders.js');

CompartmentTypeSchema.add(ElementSchema);
CompartmentTypeSchema.remove('id');
CompartmentTypeSchema.add({
  value: String,
});

module.exports.CompartmentTypeSchema = CompartmentTypeSchema;
