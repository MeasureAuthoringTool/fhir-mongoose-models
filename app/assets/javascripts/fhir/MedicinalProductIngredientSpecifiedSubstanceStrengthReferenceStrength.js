const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RatioSchema } = require('./Ratio');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema = BackboneElementSchemaFunction({
   substance : CodeableConceptSchema,
   strength : RatioSchema,
   strengthLowLimit : RatioSchema,
   measurementPoint : String,
   country : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength' },
});

class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema);
    this._type = 'FHIR::MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength';
  }
};


module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema = MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema;
module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength = MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength;
