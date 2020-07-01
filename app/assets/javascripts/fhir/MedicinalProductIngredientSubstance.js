const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthSchema } = require('./MedicinalProductIngredientSpecifiedSubstanceStrength');

const MedicinalProductIngredientSubstanceSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  strength: [MedicinalProductIngredientSpecifiedSubstanceStrengthSchema],
  typeName: { type: String, default: 'MedicinalProductIngredientSubstance' },
  _type: { type: String, default: 'FHIR::MedicinalProductIngredientSubstance' },
});

class MedicinalProductIngredientSubstance extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSubstanceSchema);
    this.typeName = 'MedicinalProductIngredientSubstance';
    this._type = 'FHIR::MedicinalProductIngredientSubstance';
  }
}

module.exports.MedicinalProductIngredientSubstanceSchema = MedicinalProductIngredientSubstanceSchema;
module.exports.MedicinalProductIngredientSubstance = MedicinalProductIngredientSubstance;
