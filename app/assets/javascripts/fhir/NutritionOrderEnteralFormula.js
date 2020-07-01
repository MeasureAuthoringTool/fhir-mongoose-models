const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { NutritionOrderEnteralFormulaAdministrationSchema } = require('./NutritionOrderEnteralFormulaAdministration');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');

const NutritionOrderEnteralFormulaSchema = BackboneElementSchemaFunction({
  baseFormulaType: CodeableConceptSchema,
  baseFormulaProductName: PrimitiveStringSchema,
  additiveType: CodeableConceptSchema,
  additiveProductName: PrimitiveStringSchema,
  caloricDensity: SimpleQuantitySchema,
  routeofAdministration: CodeableConceptSchema,
  administration: [NutritionOrderEnteralFormulaAdministrationSchema],
  maxVolumeToDeliver: SimpleQuantitySchema,
  administrationInstruction: PrimitiveStringSchema,
  typeName: { type: String, default: 'NutritionOrderEnteralFormula' },
  _type: { type: String, default: 'FHIR::NutritionOrderEnteralFormula' },
});

class NutritionOrderEnteralFormula extends mongoose.Document {
  constructor(object) {
    super(object, NutritionOrderEnteralFormulaSchema);
    this.typeName = 'NutritionOrderEnteralFormula';
    this._type = 'FHIR::NutritionOrderEnteralFormula';
  }
}

module.exports.NutritionOrderEnteralFormulaSchema = NutritionOrderEnteralFormulaSchema;
module.exports.NutritionOrderEnteralFormula = NutritionOrderEnteralFormula;
