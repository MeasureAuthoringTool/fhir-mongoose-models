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

const MedicationKnowledgeIngredientSchema = BackboneElementSchemaFunction({
   itemCodeableConcept : CodeableConceptSchema,
   itemReference : ReferenceSchema,
   isActive : Boolean,
   strength : RatioSchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeIngredient' },
});

class MedicationKnowledgeIngredient extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeIngredientSchema);
    this._type = 'FHIR::MedicationKnowledgeIngredient';
  }
};


module.exports.MedicationKnowledgeIngredientSchema = MedicationKnowledgeIngredientSchema;
module.exports.MedicationKnowledgeIngredient = MedicationKnowledgeIngredient;
