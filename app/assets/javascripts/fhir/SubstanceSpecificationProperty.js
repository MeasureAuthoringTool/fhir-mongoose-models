const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationPropertySchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   code : CodeableConceptSchema,
   parameters : String,
   definingSubstanceReference : ReferenceSchema,
   definingSubstanceCodeableConcept : CodeableConceptSchema,
   amountQuantity : QuantitySchema,
   amountString : String,
   fhirTitle: { type: String, default: 'SubstanceSpecificationProperty' },
});

class SubstanceSpecificationProperty extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationPropertySchema);
    this._type = 'FHIR::SubstanceSpecificationProperty';
  }
};


module.exports.SubstanceSpecificationPropertySchema = SubstanceSpecificationPropertySchema;
module.exports.SubstanceSpecificationProperty = SubstanceSpecificationProperty;
