const { BackboneElementSchema } = require('./BackboneElement');
const { MedicationKnowledgeRegulatoryMaxDispenseSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatoryScheduleSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatorySubstitutionSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatorySchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeRegulatorySchema.add(BackboneElementSchema);
MedicationKnowledgeRegulatorySchema.remove('id');
MedicationKnowledgeRegulatorySchema.add({
  regulatoryAuthority: ReferenceSchema,
  substitution: [MedicationKnowledgeRegulatorySubstitutionSchema],
  schedule: [MedicationKnowledgeRegulatoryScheduleSchema],
  maxDispense: MedicationKnowledgeRegulatoryMaxDispenseSchema,
});

module.exports.MedicationKnowledgeRegulatorySchema = MedicationKnowledgeRegulatorySchema;
