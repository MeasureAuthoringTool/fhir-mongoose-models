const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NutritionOrderOralDietNutrientSchema } = require('./NutritionOrderOralDietNutrient');
const { NutritionOrderOralDietTextureSchema } = require('./NutritionOrderOralDietTexture');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderOralDietSchema = BackboneElementSchemaFunction({
   type : [CodeableConceptSchema],
   schedule : [TimingSchema],
   nutrient : [NutritionOrderOralDietNutrientSchema],
   texture : [NutritionOrderOralDietTextureSchema],
   fluidConsistencyType : [CodeableConceptSchema],
   instruction : String,
   fhirTitle: { type: String, default: 'NutritionOrderOralDiet' },
});

class NutritionOrderOralDiet extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderOralDietSchema);
    this._type = 'FHIR::NutritionOrderOralDiet';
  }
};


module.exports.NutritionOrderOralDietSchema = NutritionOrderOralDietSchema;
module.exports.NutritionOrderOralDiet = NutritionOrderOralDiet;
