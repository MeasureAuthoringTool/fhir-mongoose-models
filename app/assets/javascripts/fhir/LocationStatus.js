const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const LocationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'LocationStatus' },
});

class LocationStatus extends mongoose.Document {
  constructor(object) {
    super(object, LocationStatusSchema);
    this._type = 'FHIR::LocationStatus';
  }
};


module.exports.LocationStatusSchema = LocationStatusSchema;
module.exports.LocationStatus = LocationStatus;
