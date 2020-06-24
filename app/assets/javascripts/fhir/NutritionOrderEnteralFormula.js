const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NutritionOrderEnteralFormulaAdministrationSchema } = require('./NutritionOrderEnteralFormulaAdministration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NutritionOrderEnteralFormulaSchema = BackboneElementSchemaFunction({
   baseFormulaType : CodeableConceptSchema,
   baseFormulaProductName : String,
   additiveType : CodeableConceptSchema,
   additiveProductName : String,
   caloricDensity : SimpleQuantitySchema,
   routeofAdministration : CodeableConceptSchema,
   administration : [NutritionOrderEnteralFormulaAdministrationSchema],
   maxVolumeToDeliver : SimpleQuantitySchema,
   administrationInstruction : String,
   fhirTitle: { type: String, default: 'NutritionOrderEnteralFormula' },
});

class NutritionOrderEnteralFormula extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderEnteralFormulaSchema);
    this._type = 'FHIR::NutritionOrderEnteralFormula';
  }
};


module.exports.NutritionOrderEnteralFormulaSchema = NutritionOrderEnteralFormulaSchema;
module.exports.NutritionOrderEnteralFormula = NutritionOrderEnteralFormula;
