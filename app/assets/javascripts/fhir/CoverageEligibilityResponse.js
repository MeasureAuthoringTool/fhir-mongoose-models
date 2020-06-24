const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityResponseErrorSchema } = require('./CoverageEligibilityResponseError');
const { CoverageEligibilityResponseInsuranceSchema } = require('./CoverageEligibilityResponseInsurance');
const { DomainResourceSchema } = require('./DomainResource');
const { EligibilityResponsePurposeSchema } = require('./EligibilityResponsePurpose');
const { EligibilityResponseStatusSchema } = require('./EligibilityResponseStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityResponseSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EligibilityResponseStatusSchema,
   purpose : [EligibilityResponsePurposeSchema],
   patient : ReferenceSchema,
   servicedDate : FHIRDate,
   servicedPeriod : PeriodSchema,
   created : DateTime,
   requestor : ReferenceSchema,
   request : ReferenceSchema,
   outcome : RemittanceOutcomeSchema,
   disposition : String,
   insurer : ReferenceSchema,
   insurance : [CoverageEligibilityResponseInsuranceSchema],
   preAuthRef : String,
   form : CodeableConceptSchema,
   error : [CoverageEligibilityResponseErrorSchema],
   fhirTitle: { type: String, default: 'CoverageEligibilityResponse' },
});

class CoverageEligibilityResponse extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseSchema);
    this._type = 'FHIR::CoverageEligibilityResponse';
  }
};


module.exports.CoverageEligibilityResponseSchema = CoverageEligibilityResponseSchema;
module.exports.CoverageEligibilityResponse = CoverageEligibilityResponse;
