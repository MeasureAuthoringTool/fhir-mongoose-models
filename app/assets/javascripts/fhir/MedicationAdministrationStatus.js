const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationAdministrationStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MedicationAdministrationStatus' },
});

class MedicationAdministrationStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationStatusSchema);
    this._type = 'FHIR::MedicationAdministrationStatus';
  }
};


module.exports.MedicationAdministrationStatusSchema = MedicationAdministrationStatusSchema;
module.exports.MedicationAdministrationStatus = MedicationAdministrationStatus;
