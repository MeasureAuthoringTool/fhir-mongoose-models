const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationRelationshipSchema = BackboneElementSchemaFunction({
   substanceReference : ReferenceSchema,
   substanceCodeableConcept : CodeableConceptSchema,
   relationship : CodeableConceptSchema,
   isDefining : Boolean,
   amountQuantity : QuantitySchema,
   amountRange : RangeSchema,
   amountRatio : RatioSchema,
   amountString : String,
   amountRatioLowLimit : RatioSchema,
   amountType : CodeableConceptSchema,
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceSpecificationRelationship' },
});

class SubstanceSpecificationRelationship extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationRelationshipSchema);
    this._type = 'FHIR::SubstanceSpecificationRelationship';
  }
};


module.exports.SubstanceSpecificationRelationshipSchema = SubstanceSpecificationRelationshipSchema;
module.exports.SubstanceSpecificationRelationship = SubstanceSpecificationRelationship;
