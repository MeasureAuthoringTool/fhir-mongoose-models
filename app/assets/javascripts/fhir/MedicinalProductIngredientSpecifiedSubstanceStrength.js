const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema } = require('./MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength');
const { RatioSchema } = require('./Ratio');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductIngredientSpecifiedSubstanceStrengthSchema = BackboneElementSchemaFunction({
   presentation : RatioSchema,
   presentationLowLimit : RatioSchema,
   concentration : RatioSchema,
   concentrationLowLimit : RatioSchema,
   measurementPoint : String,
   country : [CodeableConceptSchema],
   referenceStrength : [MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema],
   fhirTitle: { type: String, default: 'MedicinalProductIngredientSpecifiedSubstanceStrength' },
});

class MedicinalProductIngredientSpecifiedSubstanceStrength extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSpecifiedSubstanceStrengthSchema);
    this._type = 'FHIR::MedicinalProductIngredientSpecifiedSubstanceStrength';
  }
};


module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthSchema = MedicinalProductIngredientSpecifiedSubstanceStrengthSchema;
module.exports.MedicinalProductIngredientSpecifiedSubstanceStrength = MedicinalProductIngredientSpecifiedSubstanceStrength;
