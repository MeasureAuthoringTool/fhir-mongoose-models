const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DosageSchema } = require('./Dosage');

const MedicationKnowledgeAdministrationGuidelinesDosageSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  dosage: [DosageSchema],
  typeName: { type: String, default: 'MedicationKnowledgeAdministrationGuidelinesDosage' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeAdministrationGuidelinesDosage' },
});

class MedicationKnowledgeAdministrationGuidelinesDosage extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeAdministrationGuidelinesDosageSchema);
    this.typeName = 'MedicationKnowledgeAdministrationGuidelinesDosage';
    this._type = 'FHIR::MedicationKnowledgeAdministrationGuidelinesDosage';
  }
}

module.exports.MedicationKnowledgeAdministrationGuidelinesDosageSchema = MedicationKnowledgeAdministrationGuidelinesDosageSchema;
module.exports.MedicationKnowledgeAdministrationGuidelinesDosage = MedicationKnowledgeAdministrationGuidelinesDosage;
