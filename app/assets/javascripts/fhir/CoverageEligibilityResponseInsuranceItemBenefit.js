const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityResponseInsuranceItemBenefitSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   allowedUnsignedInt : Number,
   allowedString : String,
   allowedMoney : MoneySchema,
   usedUnsignedInt : Number,
   usedString : String,
   usedMoney : MoneySchema,
   fhirTitle: { type: String, default: 'CoverageEligibilityResponseInsuranceItemBenefit' },
});

class CoverageEligibilityResponseInsuranceItemBenefit extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseInsuranceItemBenefitSchema);
    this._type = 'FHIR::CoverageEligibilityResponseInsuranceItemBenefit';
  }
};


module.exports.CoverageEligibilityResponseInsuranceItemBenefitSchema = CoverageEligibilityResponseInsuranceItemBenefitSchema;
module.exports.CoverageEligibilityResponseInsuranceItemBenefit = CoverageEligibilityResponseInsuranceItemBenefit;
