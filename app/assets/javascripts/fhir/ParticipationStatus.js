const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParticipationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ParticipationStatus' },
});

class ParticipationStatus extends mongoose.Document {
  constructor(object) {
    super(object, ParticipationStatusSchema);
    this._type = 'FHIR::ParticipationStatus';
  }
};


module.exports.ParticipationStatusSchema = ParticipationStatusSchema;
module.exports.ParticipationStatus = ParticipationStatus;
