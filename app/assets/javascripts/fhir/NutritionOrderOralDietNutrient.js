const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderOralDietNutrientSchema = BackboneElementSchemaFunction({
   modifier : CodeableConceptSchema,
   amount : SimpleQuantitySchema,
   fhirTitle: { type: String, default: 'NutritionOrderOralDietNutrient' },
});

class NutritionOrderOralDietNutrient extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderOralDietNutrientSchema);
    this._type = 'FHIR::NutritionOrderOralDietNutrient';
  }
};


module.exports.NutritionOrderOralDietNutrientSchema = NutritionOrderOralDietNutrientSchema;
module.exports.NutritionOrderOralDietNutrient = NutritionOrderOralDietNutrient;
