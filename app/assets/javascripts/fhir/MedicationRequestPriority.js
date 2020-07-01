const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationRequestPrioritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationRequestPriority' },
  _type: { type: String, default: 'FHIR::MedicationRequestPriority' },
});

class MedicationRequestPriority extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestPrioritySchema);
    this.typeName = 'MedicationRequestPriority';
    this._type = 'FHIR::MedicationRequestPriority';
  }
}

module.exports.MedicationRequestPrioritySchema = MedicationRequestPrioritySchema;
module.exports.MedicationRequestPriority = MedicationRequestPriority;
