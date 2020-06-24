const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationMoietySchema = BackboneElementSchemaFunction({
   role : CodeableConceptSchema,
   identifier : IdentifierSchema,
   name : String,
   stereochemistry : CodeableConceptSchema,
   opticalActivity : CodeableConceptSchema,
   molecularFormula : String,
   amountQuantity : QuantitySchema,
   amountString : String,
   fhirTitle: { type: String, default: 'SubstanceSpecificationMoiety' },
});

class SubstanceSpecificationMoiety extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationMoietySchema);
    this._type = 'FHIR::SubstanceSpecificationMoiety';
  }
};


module.exports.SubstanceSpecificationMoietySchema = SubstanceSpecificationMoietySchema;
module.exports.SubstanceSpecificationMoiety = SubstanceSpecificationMoiety;
