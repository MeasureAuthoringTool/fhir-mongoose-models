const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRelatedMedicationKnowledgeSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeRelatedMedicationKnowledgeSchema.add(BackboneElementSchema);
MedicationKnowledgeRelatedMedicationKnowledgeSchema.remove('id');
MedicationKnowledgeRelatedMedicationKnowledgeSchema.add({
  type: CodeableConceptSchema,
  reference: [ReferenceSchema],
});

module.exports.MedicationKnowledgeRelatedMedicationKnowledgeSchema = MedicationKnowledgeRelatedMedicationKnowledgeSchema;
