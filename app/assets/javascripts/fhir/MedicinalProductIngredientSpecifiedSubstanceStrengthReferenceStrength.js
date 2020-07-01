const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RatioSchema } = require('./Ratio');

const MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema = BackboneElementSchemaFunction({
  substance: CodeableConceptSchema,
  strength: RatioSchema,
  strengthLowLimit: RatioSchema,
  measurementPoint: PrimitiveStringSchema,
  country: [CodeableConceptSchema],
  typeName: { type: String, default: 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength' },
  _type: { type: String, default: 'FHIR::MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength' },
});

class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema);
    this.typeName = 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
    this._type = 'FHIR::MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
  }
}

module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema = MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema;
module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
