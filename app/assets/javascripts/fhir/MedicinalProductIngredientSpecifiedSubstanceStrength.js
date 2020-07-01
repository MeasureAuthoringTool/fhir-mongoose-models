const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema } = require('./MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RatioSchema } = require('./Ratio');

const MedicinalProductIngredientSpecifiedSubstanceStrengthSchema = BackboneElementSchemaFunction({
  presentation: RatioSchema,
  presentationLowLimit: RatioSchema,
  concentration: RatioSchema,
  concentrationLowLimit: RatioSchema,
  measurementPoint: PrimitiveStringSchema,
  country: [CodeableConceptSchema],
  referenceStrength: [MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema],
  typeName: { type: String, default: 'MedicinalProductIngredientSpecifiedSubstanceStrength' },
  _type: { type: String, default: 'FHIR::MedicinalProductIngredientSpecifiedSubstanceStrength' },
});

class MedicinalProductIngredientSpecifiedSubstanceStrength extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSpecifiedSubstanceStrengthSchema);
    this.typeName = 'MedicinalProductIngredientSpecifiedSubstanceStrength';
    this._type = 'FHIR::MedicinalProductIngredientSpecifiedSubstanceStrength';
  }
}

module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthSchema = MedicinalProductIngredientSpecifiedSubstanceStrengthSchema;
module.exports.MedicinalProductIngredientSpecifiedSubstanceStrength = MedicinalProductIngredientSpecifiedSubstanceStrength;
