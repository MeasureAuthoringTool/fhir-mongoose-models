const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRSubstanceStatusSchema } = require('./FHIRSubstanceStatus');
const { IdentifierSchema } = require('./Identifier');
const { SubstanceIngredientSchema } = require('./SubstanceIngredient');
const { SubstanceInstanceSchema } = require('./SubstanceInstance');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : FHIRSubstanceStatusSchema,
   category : [CodeableConceptSchema],
   code : CodeableConceptSchema,
   description : String,
   instance : [SubstanceInstanceSchema],
   ingredient : [SubstanceIngredientSchema],
   fhirTitle: { type: String, default: 'Substance' },
});

class Substance extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSchema);
    this._type = 'FHIR::Substance';
  }
};


module.exports.SubstanceSchema = SubstanceSchema;
module.exports.Substance = Substance;
