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

const MedicationIngredientSchema = BackboneElementSchemaFunction({
   itemCodeableConcept : CodeableConceptSchema,
   itemReference : ReferenceSchema,
   isActive : Boolean,
   strength : RatioSchema,
   fhirTitle: { type: String, default: 'MedicationIngredient' },
});

class MedicationIngredient extends mongoose.Document {
  constructor(object) {
    super(object, MedicationIngredientSchema);
    this._type = 'FHIR::MedicationIngredient';
  }
};


module.exports.MedicationIngredientSchema = MedicationIngredientSchema;
module.exports.MedicationIngredient = MedicationIngredient;
