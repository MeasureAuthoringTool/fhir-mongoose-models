const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const NutritionOrderOralDietNutrientSchema = BackboneElementSchemaFunction({
  modifier: CodeableConceptSchema,
  amount: SimpleQuantitySchema,
  typeName: { type: String, default: 'NutritionOrderOralDietNutrient' },
  _type: { type: String, default: 'FHIR::NutritionOrderOralDietNutrient' },
});

class NutritionOrderOralDietNutrient extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderOralDietNutrientSchema);
    this.typeName = 'NutritionOrderOralDietNutrient';
    this._type = 'FHIR::NutritionOrderOralDietNutrient';
  }
}

module.exports.NutritionOrderOralDietNutrientSchema = NutritionOrderOralDietNutrientSchema;
module.exports.NutritionOrderOralDietNutrient = NutritionOrderOralDietNutrient;
