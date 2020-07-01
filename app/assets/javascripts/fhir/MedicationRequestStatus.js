const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationRequestStatus' },
  _type: { type: String, default: 'FHIR::MedicationRequestStatus' },
});

class MedicationRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestStatusSchema);
    this.typeName = 'MedicationRequestStatus';
    this._type = 'FHIR::MedicationRequestStatus';
  }
}

module.exports.MedicationRequestStatusSchema = MedicationRequestStatusSchema;
module.exports.MedicationRequestStatus = MedicationRequestStatus;
