const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CoverageEligibilityResponseInsuranceItemSchema } = require('./CoverageEligibilityResponseInsuranceItem');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityResponseInsuranceSchema = BackboneElementSchemaFunction({
   coverage : ReferenceSchema,
   inforce : Boolean,
   benefitPeriod : PeriodSchema,
   item : [CoverageEligibilityResponseInsuranceItemSchema],
   fhirTitle: { type: String, default: 'CoverageEligibilityResponseInsurance' },
});

class CoverageEligibilityResponseInsurance extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseInsuranceSchema);
    this._type = 'FHIR::CoverageEligibilityResponseInsurance';
  }
};


module.exports.CoverageEligibilityResponseInsuranceSchema = CoverageEligibilityResponseInsuranceSchema;
module.exports.CoverageEligibilityResponseInsurance = CoverageEligibilityResponseInsurance;
