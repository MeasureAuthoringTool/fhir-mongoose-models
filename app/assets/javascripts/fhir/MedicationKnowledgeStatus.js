const { ElementSchema } = require('./Element');
const { MedicationKnowledgeStatusSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeStatusSchema.add(ElementSchema);
MedicationKnowledgeStatusSchema.remove('id');
MedicationKnowledgeStatusSchema.add({
  value: String,
});

module.exports.MedicationKnowledgeStatusSchema = MedicationKnowledgeStatusSchema;
