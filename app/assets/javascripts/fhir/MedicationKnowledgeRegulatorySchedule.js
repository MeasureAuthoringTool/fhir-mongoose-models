const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const MedicationKnowledgeRegulatoryScheduleSchema = BackboneElementSchemaFunction({
  schedule: CodeableConceptSchema,
  typeName: { type: String, default: 'MedicationKnowledgeRegulatorySchedule' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeRegulatorySchedule' },
});

class MedicationKnowledgeRegulatorySchedule extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatoryScheduleSchema);
    this.typeName = 'MedicationKnowledgeRegulatorySchedule';
    this._type = 'FHIR::MedicationKnowledgeRegulatorySchedule';
  }
}

module.exports.MedicationKnowledgeRegulatoryScheduleSchema = MedicationKnowledgeRegulatoryScheduleSchema;
module.exports.MedicationKnowledgeRegulatorySchedule = MedicationKnowledgeRegulatorySchedule;
