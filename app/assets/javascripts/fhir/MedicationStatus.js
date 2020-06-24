const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MedicationStatus' },
});

class MedicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationStatusSchema);
    this._type = 'FHIR::MedicationStatus';
  }
};


module.exports.MedicationStatusSchema = MedicationStatusSchema;
module.exports.MedicationStatus = MedicationStatus;
