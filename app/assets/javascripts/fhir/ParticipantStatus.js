const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParticipantStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ParticipantStatus' },
});

class ParticipantStatus extends mongoose.Document {
  constructor(object) {
    super(object, ParticipantStatusSchema);
    this._type = 'FHIR::ParticipantStatus';
  }
};


module.exports.ParticipantStatusSchema = ParticipantStatusSchema;
module.exports.ParticipantStatus = ParticipantStatus;
