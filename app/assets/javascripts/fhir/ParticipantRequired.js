const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ParticipantRequiredSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ParticipantRequired' },
  _type: { type: String, default: 'FHIR::ParticipantRequired' },
});

class ParticipantRequired extends mongoose.Document {
  constructor(object) {
    super(object, ParticipantRequiredSchema);
    this.typeName = 'ParticipantRequired';
    this._type = 'FHIR::ParticipantRequired';
  }
}

module.exports.ParticipantRequiredSchema = ParticipantRequiredSchema;
module.exports.ParticipantRequired = ParticipantRequired;
