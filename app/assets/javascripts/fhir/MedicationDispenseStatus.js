const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationDispenseStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationDispenseStatus' },
  _type: { type: String, default: 'FHIR::MedicationDispenseStatus' },
});

class MedicationDispenseStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispenseStatusSchema);
    this.typeName = 'MedicationDispenseStatus';
    this._type = 'FHIR::MedicationDispenseStatus';
  }
}

module.exports.MedicationDispenseStatusSchema = MedicationDispenseStatusSchema;
module.exports.MedicationDispenseStatus = MedicationDispenseStatus;
