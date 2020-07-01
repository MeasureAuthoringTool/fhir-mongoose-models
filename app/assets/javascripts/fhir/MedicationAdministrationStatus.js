const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationAdministrationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationAdministrationStatus' },
  _type: { type: String, default: 'FHIR::MedicationAdministrationStatus' },
});

class MedicationAdministrationStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationStatusSchema);
    this.typeName = 'MedicationAdministrationStatus';
    this._type = 'FHIR::MedicationAdministrationStatus';
  }
}

module.exports.MedicationAdministrationStatusSchema = MedicationAdministrationStatusSchema;
module.exports.MedicationAdministrationStatus = MedicationAdministrationStatus;
