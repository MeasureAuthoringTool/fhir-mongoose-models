const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationStatus' },
  _type: { type: String, default: 'FHIR::MedicationStatus' },
});

class MedicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationStatusSchema);
    this.typeName = 'MedicationStatus';
    this._type = 'FHIR::MedicationStatus';
  }
}

module.exports.MedicationStatusSchema = MedicationStatusSchema;
module.exports.MedicationStatus = MedicationStatus;
