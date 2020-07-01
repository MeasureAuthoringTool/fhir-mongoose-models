const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicationKnowledgeAdministrationGuidelinesDosageSchema } = require('./MedicationKnowledgeAdministrationGuidelinesDosage');
const { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema } = require('./MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics');
const { ReferenceSchema } = require('./Reference');

const MedicationKnowledgeAdministrationGuidelinesSchema = BackboneElementSchemaFunction({
  dosage: [MedicationKnowledgeAdministrationGuidelinesDosageSchema],
  indicationCodeableConcept: CodeableConceptSchema,
  indicationReference: ReferenceSchema,
  patientCharacteristics: [MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema],
  typeName: { type: String, default: 'MedicationKnowledgeAdministrationGuidelines' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeAdministrationGuidelines' },
});

class MedicationKnowledgeAdministrationGuidelines extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeAdministrationGuidelinesSchema);
    this.typeName = 'MedicationKnowledgeAdministrationGuidelines';
    this._type = 'FHIR::MedicationKnowledgeAdministrationGuidelines';
  }
}

module.exports.MedicationKnowledgeAdministrationGuidelinesSchema = MedicationKnowledgeAdministrationGuidelinesSchema;
module.exports.MedicationKnowledgeAdministrationGuidelines = MedicationKnowledgeAdministrationGuidelines;
