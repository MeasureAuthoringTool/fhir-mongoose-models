const { ElementSchema } = require('./Element');
const { LocationModeSchema } = require('./allSchemaHeaders.js');

LocationModeSchema.add(ElementSchema);
LocationModeSchema.remove('id');
LocationModeSchema.add({
  value: String,
});

module.exports.LocationModeSchema = LocationModeSchema;
