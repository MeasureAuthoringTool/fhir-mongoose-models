const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { LocationPositionSchema } = require('./allSchemaHeaders.js');

LocationPositionSchema.add(BackboneElementSchema);
LocationPositionSchema.remove('id');
LocationPositionSchema.add({
  longitude: PrimitiveDecimalSchema,
  latitude: PrimitiveDecimalSchema,
  altitude: PrimitiveDecimalSchema,
});

module.exports.LocationPositionSchema = LocationPositionSchema;
