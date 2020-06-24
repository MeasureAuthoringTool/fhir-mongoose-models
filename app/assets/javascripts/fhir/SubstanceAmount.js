const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { SubstanceAmountReferenceRangeSchema } = require('./SubstanceAmountReferenceRange');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceAmountSchema = BackboneElementSchemaFunction({
   amountQuantity : QuantitySchema,
   amountRange : RangeSchema,
   amountString : String,
   amountType : CodeableConceptSchema,
   amountText : String,
   referenceRange : SubstanceAmountReferenceRangeSchema,
   fhirTitle: { type: String, default: 'SubstanceAmount' },
});

class SubstanceAmount extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceAmountSchema);
    this._type = 'FHIR::SubstanceAmount';
  }
};


module.exports.SubstanceAmountSchema = SubstanceAmountSchema;
module.exports.SubstanceAmount = SubstanceAmount;
