const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationKnowledgeIngredientSchema } = require('./allSchemaHeaders.js');

MedicationKnowledgeIngredientSchema.add(BackboneElementSchema);
MedicationKnowledgeIngredientSchema.remove('id');
MedicationKnowledgeIngredientSchema.add({
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  isActive: PrimitiveBooleanSchema,
  strength: RatioSchema,
});

module.exports.MedicationKnowledgeIngredientSchema = MedicationKnowledgeIngredientSchema;
