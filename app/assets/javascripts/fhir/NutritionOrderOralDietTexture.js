const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const NutritionOrderOralDietTextureSchema = BackboneElementSchemaFunction({
  modifier: CodeableConceptSchema,
  foodType: CodeableConceptSchema,
  typeName: { type: String, default: 'NutritionOrderOralDietTexture' },
  _type: { type: String, default: 'FHIR::NutritionOrderOralDietTexture' },
});

class NutritionOrderOralDietTexture extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderOralDietTextureSchema);
    this.typeName = 'NutritionOrderOralDietTexture';
    this._type = 'FHIR::NutritionOrderOralDietTexture';
  }
}

module.exports.NutritionOrderOralDietTextureSchema = NutritionOrderOralDietTextureSchema;
module.exports.NutritionOrderOralDietTexture = NutritionOrderOralDietTexture;
