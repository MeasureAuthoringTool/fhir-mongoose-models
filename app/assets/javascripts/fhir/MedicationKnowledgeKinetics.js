const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeKineticsSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeKineticsSchema.add(BackboneElementSchema);
MedicationKnowledgeKineticsSchema.remove('id');
MedicationKnowledgeKineticsSchema.add({
  areaUnderCurve: [SimpleQuantitySchema],
  lethalDose50: [SimpleQuantitySchema],
  halfLifePeriod: DurationSchema,
});

module.exports.MedicationKnowledgeKineticsSchema = MedicationKnowledgeKineticsSchema;
