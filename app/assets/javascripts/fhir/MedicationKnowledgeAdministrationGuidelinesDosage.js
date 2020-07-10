const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DosageSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeAdministrationGuidelinesDosageSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeAdministrationGuidelinesDosageSchema.add(BackboneElementSchema);
MedicationKnowledgeAdministrationGuidelinesDosageSchema.remove('id');
MedicationKnowledgeAdministrationGuidelinesDosageSchema.add({
  type: CodeableConceptSchema,
  dosage: [DosageSchema],
});

module.exports.MedicationKnowledgeAdministrationGuidelinesDosageSchema = MedicationKnowledgeAdministrationGuidelinesDosageSchema;
