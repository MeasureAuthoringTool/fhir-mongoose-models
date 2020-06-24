const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterLocationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EncounterLocationStatus' },
});

class EncounterLocationStatus extends mongoose.Document {
  constructor(object) {
    super(object, EncounterLocationStatusSchema);
    this._type = 'FHIR::EncounterLocationStatus';
  }
};


module.exports.EncounterLocationStatusSchema = EncounterLocationStatusSchema;
module.exports.EncounterLocationStatus = EncounterLocationStatus;
