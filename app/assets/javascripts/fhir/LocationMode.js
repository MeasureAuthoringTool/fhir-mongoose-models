const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LocationModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'LocationMode' },
});

class LocationMode extends mongoose.Document {
  constructor(object) {
    super(object, LocationModeSchema);
    this._type = 'FHIR::LocationMode';
  }
};


module.exports.LocationModeSchema = LocationModeSchema;
module.exports.LocationMode = LocationMode;
