const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const LocationModeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'LocationMode' },
  _type: { type: String, default: 'FHIR::LocationMode' },
});

class LocationMode extends mongoose.Document {
  constructor(object) {
    super(object, LocationModeSchema);
    this.typeName = 'LocationMode';
    this._type = 'FHIR::LocationMode';
  }
}

module.exports.LocationModeSchema = LocationModeSchema;
module.exports.LocationMode = LocationMode;
