const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeCostSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeCostSchema.add(BackboneElementSchema);
MedicationKnowledgeCostSchema.remove('id');
MedicationKnowledgeCostSchema.add({
  type: CodeableConceptSchema,
  source: PrimitiveStringSchema,
  cost: MoneySchema,
});

module.exports.MedicationKnowledgeCostSchema = MedicationKnowledgeCostSchema;
