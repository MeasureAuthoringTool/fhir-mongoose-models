const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderOralDietTextureSchema = BackboneElementSchemaFunction({
   modifier : CodeableConceptSchema,
   foodType : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'NutritionOrderOralDietTexture' },
});

class NutritionOrderOralDietTexture extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderOralDietTextureSchema);
    this._type = 'FHIR::NutritionOrderOralDietTexture';
  }
};


module.exports.NutritionOrderOralDietTextureSchema = NutritionOrderOralDietTextureSchema;
module.exports.NutritionOrderOralDietTexture = NutritionOrderOralDietTexture;
