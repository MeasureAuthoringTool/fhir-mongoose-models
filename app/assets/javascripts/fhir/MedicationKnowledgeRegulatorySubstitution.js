const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatorySubstitutionSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeRegulatorySubstitutionSchema.add(BackboneElementSchema);
MedicationKnowledgeRegulatorySubstitutionSchema.remove('id');
MedicationKnowledgeRegulatorySubstitutionSchema.add({
  type: CodeableConceptSchema,
  allowed: PrimitiveBooleanSchema,
});

module.exports.MedicationKnowledgeRegulatorySubstitutionSchema = MedicationKnowledgeRegulatorySubstitutionSchema;
