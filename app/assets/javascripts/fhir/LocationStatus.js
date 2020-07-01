const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const LocationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'LocationStatus' },
  _type: { type: String, default: 'FHIR::LocationStatus' },
});

class LocationStatus extends mongoose.Document {
  constructor(object) {
    super(object, LocationStatusSchema);
    this.typeName = 'LocationStatus';
    this._type = 'FHIR::LocationStatus';
  }
}

module.exports.LocationStatusSchema = LocationStatusSchema;
module.exports.LocationStatus = LocationStatus;
