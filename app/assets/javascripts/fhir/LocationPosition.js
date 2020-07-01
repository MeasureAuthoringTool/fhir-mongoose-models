const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const LocationPositionSchema = BackboneElementSchemaFunction({
  longitude: PrimitiveDecimalSchema,
  latitude: PrimitiveDecimalSchema,
  altitude: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'LocationPosition' },
  _type: { type: String, default: 'FHIR::LocationPosition' },
});

class LocationPosition extends mongoose.Document {
  constructor(object) {
    super(object, LocationPositionSchema);
    this.typeName = 'LocationPosition';
    this._type = 'FHIR::LocationPosition';
  }
}

module.exports.LocationPositionSchema = LocationPositionSchema;
module.exports.LocationPosition = LocationPosition;
