const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActionParticipantTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActionParticipantType' },
});

class ActionParticipantType extends mongoose.Document {
  constructor(object) {
    super(object, ActionParticipantTypeSchema);
    this._type = 'FHIR::ActionParticipantType';
  }
};


module.exports.ActionParticipantTypeSchema = ActionParticipantTypeSchema;
module.exports.ActionParticipantType = ActionParticipantType;
