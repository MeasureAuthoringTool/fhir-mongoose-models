const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LocationPositionSchema = BackboneElementSchemaFunction({
   longitude : Number,
   latitude : Number,
   altitude : Number,
   fhirTitle: { type: String, default: 'LocationPosition' },
});

class LocationPosition extends mongoose.Document {
  constructor(object) {
    super(object, LocationPositionSchema);
    this._type = 'FHIR::LocationPosition';
  }
};


module.exports.LocationPositionSchema = LocationPositionSchema;
module.exports.LocationPosition = LocationPosition;
