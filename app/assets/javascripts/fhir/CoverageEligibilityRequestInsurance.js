const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityRequestInsuranceSchema = BackboneElementSchemaFunction({
   focal : Boolean,
   coverage : ReferenceSchema,
   businessArrangement : String,
   fhirTitle: { type: String, default: 'CoverageEligibilityRequestInsurance' },
});

class CoverageEligibilityRequestInsurance extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestInsuranceSchema);
    this._type = 'FHIR::CoverageEligibilityRequestInsurance';
  }
};


module.exports.CoverageEligibilityRequestInsuranceSchema = CoverageEligibilityRequestInsuranceSchema;
module.exports.CoverageEligibilityRequestInsurance = CoverageEligibilityRequestInsurance;
