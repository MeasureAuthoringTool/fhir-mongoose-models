const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EncounterStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EncounterStatus' },
  _type: { type: String, default: 'FHIR::EncounterStatus' },
});

class EncounterStatus extends mongoose.Document {
  constructor(object) {
    super(object, EncounterStatusSchema);
    this.typeName = 'EncounterStatus';
    this._type = 'FHIR::EncounterStatus';
  }
}

module.exports.EncounterStatusSchema = EncounterStatusSchema;
module.exports.EncounterStatus = EncounterStatus;
