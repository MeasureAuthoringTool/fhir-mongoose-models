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

const MedicinalProductIngredientSpecifiedSubstanceSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   group : CodeableConceptSchema,
   confidentiality : CodeableConceptSchema,
   strength : [MedicinalProductIngredientSpecifiedSubstanceStrengthSchema],
   fhirTitle: { type: String, default: 'MedicinalProductIngredientSpecifiedSubstance' },
});

class MedicinalProductIngredientSpecifiedSubstance extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSpecifiedSubstanceSchema);
    this._type = 'FHIR::MedicinalProductIngredientSpecifiedSubstance';
  }
};


module.exports.MedicinalProductIngredientSpecifiedSubstanceSchema = MedicinalProductIngredientSpecifiedSubstanceSchema;
module.exports.MedicinalProductIngredientSpecifiedSubstance = MedicinalProductIngredientSpecifiedSubstance;
