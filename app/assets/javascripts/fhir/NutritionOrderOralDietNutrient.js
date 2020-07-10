const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { NutritionOrderOralDietNutrientSchema } = require('./allSchemaHeaders.js');

NutritionOrderOralDietNutrientSchema.add(BackboneElementSchema);
NutritionOrderOralDietNutrientSchema.remove('id');
NutritionOrderOralDietNutrientSchema.add({
  modifier: CodeableConceptSchema,
  amount: SimpleQuantitySchema,
});

module.exports.NutritionOrderOralDietNutrientSchema = NutritionOrderOralDietNutrientSchema;
