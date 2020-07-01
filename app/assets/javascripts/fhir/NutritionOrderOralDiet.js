const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NutritionOrderOralDietNutrientSchema } = require('./NutritionOrderOralDietNutrient');
const { NutritionOrderOralDietTextureSchema } = require('./NutritionOrderOralDietTexture');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TimingSchema } = require('./Timing');

const NutritionOrderOralDietSchema = BackboneElementSchemaFunction({
  type: [CodeableConceptSchema],
  schedule: [TimingSchema],
  nutrient: [NutritionOrderOralDietNutrientSchema],
  texture: [NutritionOrderOralDietTextureSchema],
  fluidConsistencyType: [CodeableConceptSchema],
  instruction: PrimitiveStringSchema,
  typeName: { type: String, default: 'NutritionOrderOralDiet' },
  _type: { type: String, default: 'FHIR::NutritionOrderOralDiet' },
});

class NutritionOrderOralDiet extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderOralDietSchema);
    this.typeName = 'NutritionOrderOralDiet';
    this._type = 'FHIR::NutritionOrderOralDiet';
  }
}

module.exports.NutritionOrderOralDietSchema = NutritionOrderOralDietSchema;
module.exports.NutritionOrderOralDiet = NutritionOrderOralDiet;
