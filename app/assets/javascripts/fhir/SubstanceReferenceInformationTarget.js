const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceReferenceInformationTargetSchema = BackboneElementSchemaFunction({
   target : IdentifierSchema,
   type : CodeableConceptSchema,
   interaction : CodeableConceptSchema,
   organism : CodeableConceptSchema,
   organismType : CodeableConceptSchema,
   amountQuantity : QuantitySchema,
   amountRange : RangeSchema,
   amountString : String,
   amountType : CodeableConceptSchema,
   source : [ReferenceSchema],
   fhirTitle: { type: String, default: 'SubstanceReferenceInformationTarget' },
});

class SubstanceReferenceInformationTarget extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationTargetSchema);
    this._type = 'FHIR::SubstanceReferenceInformationTarget';
  }
};


module.exports.SubstanceReferenceInformationTargetSchema = SubstanceReferenceInformationTargetSchema;
module.exports.SubstanceReferenceInformationTarget = SubstanceReferenceInformationTarget;
