const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatoryScheduleSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeRegulatoryScheduleSchema.add(BackboneElementSchema);
MedicationKnowledgeRegulatoryScheduleSchema.remove('id');
MedicationKnowledgeRegulatoryScheduleSchema.add({
  schedule: CodeableConceptSchema,
});

module.exports.MedicationKnowledgeRegulatoryScheduleSchema = MedicationKnowledgeRegulatoryScheduleSchema;
