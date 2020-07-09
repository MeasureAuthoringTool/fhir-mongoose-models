const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { NutritiionOrderIntentSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderEnteralFormulaSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderOralDietSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderStatusSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderSupplementSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderSchema } = require('./allSchemaHeaders.js');

NutritionOrderSchema.add(DomainResourceSchema);
NutritionOrderSchema.remove('id');
NutritionOrderSchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  instantiates: [PrimitiveUriSchema],
  status: NutritionOrderStatusSchema,
  intent: NutritiionOrderIntentSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  dateTime: PrimitiveDateTimeSchema,
  orderer: ReferenceSchema,
  allergyIntolerance: [ReferenceSchema],
  foodPreferenceModifier: [CodeableConceptSchema],
  excludeFoodModifier: [CodeableConceptSchema],
  oralDiet: NutritionOrderOralDietSchema,
  supplement: [NutritionOrderSupplementSchema],
  enteralFormula: NutritionOrderEnteralFormulaSchema,
  note: [AnnotationSchema],
});

module.exports.NutritionOrderSchema = NutritionOrderSchema;
