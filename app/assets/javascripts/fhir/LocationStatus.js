const { ElementSchema } = require('./Element');
const { LocationStatusSchema } = require('./allSchemaHeaders.js');

LocationStatusSchema.add(ElementSchema);
LocationStatusSchema.remove('id');
LocationStatusSchema.add({
  value: String,
});

module.exports.LocationStatusSchema = LocationStatusSchema;
