const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationIngredientSchema } = require('./allSchemaHeaders.js');

MedicationIngredientSchema.add(BackboneElementSchema);
MedicationIngredientSchema.remove('id');
MedicationIngredientSchema.add({
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  isActive: PrimitiveBooleanSchema,
  strength: RatioSchema,
});

module.exports.MedicationIngredientSchema = MedicationIngredientSchema;
