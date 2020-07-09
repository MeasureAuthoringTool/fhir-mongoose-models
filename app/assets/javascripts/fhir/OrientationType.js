const { ElementSchema } = require('./Element');
const { OrientationTypeSchema } = require('./allSchemaHeaders.js');

OrientationTypeSchema.add(ElementSchema);
OrientationTypeSchema.remove('id');
OrientationTypeSchema.add({
  value: String,
});

module.exports.OrientationTypeSchema = OrientationTypeSchema;
