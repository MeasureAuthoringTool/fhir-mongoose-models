const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanCoverageBenefitSchema } = require('./InsurancePlanCoverageBenefit');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const InsurancePlanCoverageSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   network : [ReferenceSchema],
   benefit : [InsurancePlanCoverageBenefitSchema],
   fhirTitle: { type: String, default: 'InsurancePlanCoverage' },
});

class InsurancePlanCoverage extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanCoverageSchema);
    this._type = 'FHIR::InsurancePlanCoverage';
  }
};


module.exports.InsurancePlanCoverageSchema = InsurancePlanCoverageSchema;
module.exports.InsurancePlanCoverage = InsurancePlanCoverage;
