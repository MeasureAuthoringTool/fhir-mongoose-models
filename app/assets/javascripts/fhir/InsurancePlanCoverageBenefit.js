const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanCoverageBenefitLimitSchema } = require('./InsurancePlanCoverageBenefitLimit');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanCoverageBenefitSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   requirement : String,
   limit : [InsurancePlanCoverageBenefitLimitSchema],
   fhirTitle: { type: String, default: 'InsurancePlanCoverageBenefit' },
});

class InsurancePlanCoverageBenefit extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanCoverageBenefitSchema);
    this._type = 'FHIR::InsurancePlanCoverageBenefit';
  }
};


module.exports.InsurancePlanCoverageBenefitSchema = InsurancePlanCoverageBenefitSchema;
module.exports.InsurancePlanCoverageBenefit = InsurancePlanCoverageBenefit;
