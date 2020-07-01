const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationStatementStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationStatementStatus' },
  _type: { type: String, default: 'FHIR::MedicationStatementStatus' },
});

class MedicationStatementStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationStatementStatusSchema);
    this.typeName = 'MedicationStatementStatus';
    this._type = 'FHIR::MedicationStatementStatus';
  }
}

module.exports.MedicationStatementStatusSchema = MedicationStatementStatusSchema;
module.exports.MedicationStatementStatus = MedicationStatementStatus;
