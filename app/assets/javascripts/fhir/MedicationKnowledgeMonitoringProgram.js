const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeMonitoringProgramSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeMonitoringProgramSchema.add(BackboneElementSchema);
MedicationKnowledgeMonitoringProgramSchema.remove('id');
MedicationKnowledgeMonitoringProgramSchema.add({
  type: CodeableConceptSchema,
  name: PrimitiveStringSchema,
});

module.exports.MedicationKnowledgeMonitoringProgramSchema = MedicationKnowledgeMonitoringProgramSchema;
