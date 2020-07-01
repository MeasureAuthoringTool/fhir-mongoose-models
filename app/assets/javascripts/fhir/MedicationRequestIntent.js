const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationRequestIntentSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationRequestIntent' },
  _type: { type: String, default: 'FHIR::MedicationRequestIntent' },
});

class MedicationRequestIntent extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestIntentSchema);
    this.typeName = 'MedicationRequestIntent';
    this._type = 'FHIR::MedicationRequestIntent';
  }
}

module.exports.MedicationRequestIntentSchema = MedicationRequestIntentSchema;
module.exports.MedicationRequestIntent = MedicationRequestIntent;
