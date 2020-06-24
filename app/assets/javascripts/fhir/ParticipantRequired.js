const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParticipantRequiredSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ParticipantRequired' },
});

class ParticipantRequired extends mongoose.Document {
  constructor(object) {
    super(object, ParticipantRequiredSchema);
    this._type = 'FHIR::ParticipantRequired';
  }
};


module.exports.ParticipantRequiredSchema = ParticipantRequiredSchema;
module.exports.ParticipantRequired = ParticipantRequired;
