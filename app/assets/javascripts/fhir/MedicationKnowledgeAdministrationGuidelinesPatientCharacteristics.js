const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema.add(BackboneElementSchema);
MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema.remove('id');
MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema.add({
  characteristicCodeableConcept: CodeableConceptSchema,
  characteristicSimpleQuantity: SimpleQuantitySchema,
  value: [PrimitiveStringSchema],
});

module.exports.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema = MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema;
