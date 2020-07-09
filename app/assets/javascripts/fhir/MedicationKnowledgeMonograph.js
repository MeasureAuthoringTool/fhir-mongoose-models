const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeMonographSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeMonographSchema.add(BackboneElementSchema);
MedicationKnowledgeMonographSchema.remove('id');
MedicationKnowledgeMonographSchema.add({
  type: CodeableConceptSchema,
  source: ReferenceSchema,
});

module.exports.MedicationKnowledgeMonographSchema = MedicationKnowledgeMonographSchema;
