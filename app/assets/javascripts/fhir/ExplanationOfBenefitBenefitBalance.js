const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitBenefitBalanceFinancialSchema } = require('./ExplanationOfBenefitBenefitBalanceFinancial');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExplanationOfBenefitBenefitBalanceSchema = BackboneElementSchemaFunction({
   category : CodeableConceptSchema,
   excluded : Boolean,
   name : String,
   description : String,
   network : CodeableConceptSchema,
   unit : CodeableConceptSchema,
   term : CodeableConceptSchema,
   financial : [ExplanationOfBenefitBenefitBalanceFinancialSchema],
   fhirTitle: { type: String, default: 'ExplanationOfBenefitBenefitBalance' },
});

class ExplanationOfBenefitBenefitBalance extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitBenefitBalanceSchema);
    this._type = 'FHIR::ExplanationOfBenefitBenefitBalance';
  }
};


module.exports.ExplanationOfBenefitBenefitBalanceSchema = ExplanationOfBenefitBenefitBalanceSchema;
module.exports.ExplanationOfBenefitBenefitBalance = ExplanationOfBenefitBenefitBalance;
