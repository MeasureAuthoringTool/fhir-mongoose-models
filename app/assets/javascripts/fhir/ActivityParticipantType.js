const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActivityParticipantTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ActivityParticipantType' },
});

class ActivityParticipantType extends mongoose.Document {
  constructor(object) {
    super(object, ActivityParticipantTypeSchema);
    this._type = 'FHIR::ActivityParticipantType';
  }
};


module.exports.ActivityParticipantTypeSchema = ActivityParticipantTypeSchema;
module.exports.ActivityParticipantType = ActivityParticipantType;
