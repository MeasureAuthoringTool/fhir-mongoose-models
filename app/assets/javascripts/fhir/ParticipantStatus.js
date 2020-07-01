const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ParticipantStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ParticipantStatus' },
  _type: { type: String, default: 'FHIR::ParticipantStatus' },
});

class ParticipantStatus extends mongoose.Document {
  constructor(object) {
    super(object, ParticipantStatusSchema);
    this.typeName = 'ParticipantStatus';
    this._type = 'FHIR::ParticipantStatus';
  }
}

module.exports.ParticipantStatusSchema = ParticipantStatusSchema;
module.exports.ParticipantStatus = ParticipantStatus;
