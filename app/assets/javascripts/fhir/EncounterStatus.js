const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EncounterStatus' },
});

class EncounterStatus extends mongoose.Document {
  constructor(object) {
    super(object, EncounterStatusSchema);
    this._type = 'FHIR::EncounterStatus';
  }
};


module.exports.EncounterStatusSchema = EncounterStatusSchema;
module.exports.EncounterStatus = EncounterStatus;
