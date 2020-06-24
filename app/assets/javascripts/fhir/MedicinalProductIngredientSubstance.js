const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthSchema } = require('./MedicinalProductIngredientSpecifiedSubstanceStrength');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductIngredientSubstanceSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   strength : [MedicinalProductIngredientSpecifiedSubstanceStrengthSchema],
   fhirTitle: { type: String, default: 'MedicinalProductIngredientSubstance' },
});

class MedicinalProductIngredientSubstance extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSubstanceSchema);
    this._type = 'FHIR::MedicinalProductIngredientSubstance';
  }
};


module.exports.MedicinalProductIngredientSubstanceSchema = MedicinalProductIngredientSubstanceSchema;
module.exports.MedicinalProductIngredientSubstance = MedicinalProductIngredientSubstance;
