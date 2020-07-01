const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ParticipationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ParticipationStatus' },
  _type: { type: String, default: 'FHIR::ParticipationStatus' },
});

class ParticipationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ParticipationStatusSchema);
    this.typeName = 'ParticipationStatus';
    this._type = 'FHIR::ParticipationStatus';
  }
}

module.exports.ParticipationStatusSchema = ParticipationStatusSchema;
module.exports.ParticipationStatus = ParticipationStatus;
