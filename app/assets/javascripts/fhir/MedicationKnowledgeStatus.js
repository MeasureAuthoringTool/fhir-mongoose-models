const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MedicationKnowledgeStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MedicationKnowledgeStatus' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeStatus' },
});

class MedicationKnowledgeStatus extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeStatusSchema);
    this.typeName = 'MedicationKnowledgeStatus';
    this._type = 'FHIR::MedicationKnowledgeStatus';
  }
}

module.exports.MedicationKnowledgeStatusSchema = MedicationKnowledgeStatusSchema;
module.exports.MedicationKnowledgeStatus = MedicationKnowledgeStatus;
