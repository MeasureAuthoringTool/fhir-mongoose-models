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

const ExplanationOfBenefitPaymentSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   adjustment : MoneySchema,
   adjustmentReason : CodeableConceptSchema,
   date : FHIRDate,
   amount : MoneySchema,
   identifier : IdentifierSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitPayment' },
});

class ExplanationOfBenefitPayment extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitPaymentSchema);
    this._type = 'FHIR::ExplanationOfBenefitPayment';
  }
};


module.exports.ExplanationOfBenefitPaymentSchema = ExplanationOfBenefitPaymentSchema;
module.exports.ExplanationOfBenefitPayment = ExplanationOfBenefitPayment;
