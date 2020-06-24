const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicinalProductIngredientSpecifiedSubstanceSchema } = require('./MedicinalProductIngredientSpecifiedSubstance');
const { MedicinalProductIngredientSubstanceSchema } = require('./MedicinalProductIngredientSubstance');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductIngredientSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   role : CodeableConceptSchema,
   allergenicIndicator : Boolean,
   manufacturer : [ReferenceSchema],
   specifiedSubstance : [MedicinalProductIngredientSpecifiedSubstanceSchema],
   substance : MedicinalProductIngredientSubstanceSchema,
   fhirTitle: { type: String, default: 'MedicinalProductIngredient' },
});

class MedicinalProductIngredient extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSchema);
    this._type = 'FHIR::MedicinalProductIngredient';
  }
};


module.exports.MedicinalProductIngredientSchema = MedicinalProductIngredientSchema;
module.exports.MedicinalProductIngredient = MedicinalProductIngredient;
