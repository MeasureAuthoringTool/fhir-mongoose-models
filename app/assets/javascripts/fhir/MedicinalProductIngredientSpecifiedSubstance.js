const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthSchema } = require('./MedicinalProductIngredientSpecifiedSubstanceStrength');

const MedicinalProductIngredientSpecifiedSubstanceSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  group: CodeableConceptSchema,
  confidentiality: CodeableConceptSchema,
  strength: [MedicinalProductIngredientSpecifiedSubstanceStrengthSchema],
  typeName: { type: String, default: 'MedicinalProductIngredientSpecifiedSubstance' },
  _type: { type: String, default: 'FHIR::MedicinalProductIngredientSpecifiedSubstance' },
});

class MedicinalProductIngredientSpecifiedSubstance extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSpecifiedSubstanceSchema);
    this.typeName = 'MedicinalProductIngredientSpecifiedSubstance';
    this._type = 'FHIR::MedicinalProductIngredientSpecifiedSubstance';
  }
}

module.exports.MedicinalProductIngredientSpecifiedSubstanceSchema = MedicinalProductIngredientSpecifiedSubstanceSchema;
module.exports.MedicinalProductIngredientSpecifiedSubstance = MedicinalProductIngredientSpecifiedSubstance;
