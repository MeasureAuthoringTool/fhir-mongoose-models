const mongoose = require('mongoose/browser');
const FHIRDate = require('./basetypes/FHIRDate');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponsePaymentSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   adjustment : MoneySchema,
   adjustmentReason : CodeableConceptSchema,
   date : FHIRDate,
   amount : MoneySchema,
   identifier : IdentifierSchema,
   fhirTitle: { type: String, default: 'ClaimResponsePayment' },
});

class ClaimResponsePayment extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponsePaymentSchema);
    this._type = 'FHIR::ClaimResponsePayment';
  }
};


module.exports.ClaimResponsePaymentSchema = ClaimResponsePaymentSchema;
module.exports.ClaimResponsePayment = ClaimResponsePayment;
