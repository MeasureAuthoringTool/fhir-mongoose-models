const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeMedicineClassificationSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeMedicineClassificationSchema.add(BackboneElementSchema);
MedicationKnowledgeMedicineClassificationSchema.remove('id');
MedicationKnowledgeMedicineClassificationSchema.add({
  type: CodeableConceptSchema,
  classification: [CodeableConceptSchema],
});

module.exports.MedicationKnowledgeMedicineClassificationSchema = MedicationKnowledgeMedicineClassificationSchema;
