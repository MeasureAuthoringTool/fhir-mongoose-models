const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeAdministrationGuidelinesDosageSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeAdministrationGuidelinesSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeAdministrationGuidelinesSchema.add(BackboneElementSchema);
MedicationKnowledgeAdministrationGuidelinesSchema.remove('id');
MedicationKnowledgeAdministrationGuidelinesSchema.add({
  dosage: [MedicationKnowledgeAdministrationGuidelinesDosageSchema],
  indicationCodeableConcept: CodeableConceptSchema,
  indicationReference: ReferenceSchema,
  patientCharacteristics: [MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema],
});

module.exports.MedicationKnowledgeAdministrationGuidelinesSchema = MedicationKnowledgeAdministrationGuidelinesSchema;
