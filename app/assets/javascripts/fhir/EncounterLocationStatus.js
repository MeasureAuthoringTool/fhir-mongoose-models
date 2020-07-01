const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EncounterLocationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EncounterLocationStatus' },
  _type: { type: String, default: 'FHIR::EncounterLocationStatus' },
});

class EncounterLocationStatus extends mongoose.Document {
  constructor(object) {
    super(object, EncounterLocationStatusSchema);
    this.typeName = 'EncounterLocationStatus';
    this._type = 'FHIR::EncounterLocationStatus';
  }
}

module.exports.EncounterLocationStatusSchema = EncounterLocationStatusSchema;
module.exports.EncounterLocationStatus = EncounterLocationStatus;
