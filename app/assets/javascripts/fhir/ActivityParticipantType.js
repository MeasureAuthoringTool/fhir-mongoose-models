const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActivityParticipantTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActivityParticipantType' },
  _type: { type: String, default: 'FHIR::ActivityParticipantType' },
});

class ActivityParticipantType extends mongoose.Document {
  constructor(object) {
    super(object, ActivityParticipantTypeSchema);
    this.typeName = 'ActivityParticipantType';
    this._type = 'FHIR::ActivityParticipantType';
  }
}

module.exports.ActivityParticipantTypeSchema = ActivityParticipantTypeSchema;
module.exports.ActivityParticipantType = ActivityParticipantType;
