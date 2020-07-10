const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeRegulatoryMaxDispenseSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeRegulatoryMaxDispenseSchema.add(BackboneElementSchema);
MedicationKnowledgeRegulatoryMaxDispenseSchema.remove('id');
MedicationKnowledgeRegulatoryMaxDispenseSchema.add({
  quantity: SimpleQuantitySchema,
  period: DurationSchema,
});

module.exports.MedicationKnowledgeRegulatoryMaxDispenseSchema = MedicationKnowledgeRegulatoryMaxDispenseSchema;
