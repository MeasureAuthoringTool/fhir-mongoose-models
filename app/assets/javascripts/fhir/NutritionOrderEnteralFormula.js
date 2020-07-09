const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderEnteralFormulaAdministrationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { NutritionOrderEnteralFormulaSchema } = require('./allSchemaHeaders.js');

NutritionOrderEnteralFormulaSchema.add(BackboneElementSchema);
NutritionOrderEnteralFormulaSchema.remove('id');
NutritionOrderEnteralFormulaSchema.add({
  baseFormulaType: CodeableConceptSchema,
  baseFormulaProductName: PrimitiveStringSchema,
  additiveType: CodeableConceptSchema,
  additiveProductName: PrimitiveStringSchema,
  caloricDensity: SimpleQuantitySchema,
  routeofAdministration: CodeableConceptSchema,
  administration: [NutritionOrderEnteralFormulaAdministrationSchema],
  maxVolumeToDeliver: SimpleQuantitySchema,
  administrationInstruction: PrimitiveStringSchema,
});

module.exports.NutritionOrderEnteralFormulaSchema = NutritionOrderEnteralFormulaSchema;
