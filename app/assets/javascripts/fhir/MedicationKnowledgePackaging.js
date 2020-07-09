const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgePackagingSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgePackagingSchema.add(BackboneElementSchema);
MedicationKnowledgePackagingSchema.remove('id');
MedicationKnowledgePackagingSchema.add({
  type: CodeableConceptSchema,
  quantity: SimpleQuantitySchema,
});

module.exports.MedicationKnowledgePackagingSchema = MedicationKnowledgePackagingSchema;
