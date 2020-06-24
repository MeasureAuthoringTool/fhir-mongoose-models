const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceIngredientSchema = BackboneElementSchemaFunction({
   quantity : RatioSchema,
   substanceCodeableConcept : CodeableConceptSchema,
   substanceReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'SubstanceIngredient' },
});

class SubstanceIngredient extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceIngredientSchema);
    this._type = 'FHIR::SubstanceIngredient';
  }
};


module.exports.SubstanceIngredientSchema = SubstanceIngredientSchema;
module.exports.SubstanceIngredient = SubstanceIngredient;
