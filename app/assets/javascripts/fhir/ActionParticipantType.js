const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ActionParticipantTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ActionParticipantType' },
  _type: { type: String, default: 'FHIR::ActionParticipantType' },
});

class ActionParticipantType extends mongoose.Document {
  constructor(object) {
    super(object, ActionParticipantTypeSchema);
    this.typeName = 'ActionParticipantType';
    this._type = 'FHIR::ActionParticipantType';
  }
}

module.exports.ActionParticipantTypeSchema = ActionParticipantTypeSchema;
module.exports.ActionParticipantType = ActionParticipantType;
