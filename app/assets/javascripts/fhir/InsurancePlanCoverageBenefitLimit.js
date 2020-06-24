const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanCoverageBenefitLimitSchema = BackboneElementSchemaFunction({
   value : QuantitySchema,
   code : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'InsurancePlanCoverageBenefitLimit' },
});

class InsurancePlanCoverageBenefitLimit extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanCoverageBenefitLimitSchema);
    this._type = 'FHIR::InsurancePlanCoverageBenefitLimit';
  }
};


module.exports.InsurancePlanCoverageBenefitLimitSchema = InsurancePlanCoverageBenefitLimitSchema;
module.exports.InsurancePlanCoverageBenefitLimit = InsurancePlanCoverageBenefitLimit;
