const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityRequestInsuranceSchema } = require('./CoverageEligibilityRequestInsurance');
const { CoverageEligibilityRequestItemSchema } = require('./CoverageEligibilityRequestItem');
const { CoverageEligibilityRequestSupportingInfoSchema } = require('./CoverageEligibilityRequestSupportingInfo');
const { DomainResourceSchema } = require('./DomainResource');
const { EligibilityRequestPurposeSchema } = require('./EligibilityRequestPurpose');
const { EligibilityRequestStatusSchema } = require('./EligibilityRequestStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : EligibilityRequestStatusSchema,
   priority : CodeableConceptSchema,
   purpose : [EligibilityRequestPurposeSchema],
   patient : ReferenceSchema,
   servicedDate : FHIRDate,
   servicedPeriod : PeriodSchema,
   created : DateTime,
   enterer : ReferenceSchema,
   provider : ReferenceSchema,
   insurer : ReferenceSchema,
   facility : ReferenceSchema,
   supportingInfo : [CoverageEligibilityRequestSupportingInfoSchema],
   insurance : [CoverageEligibilityRequestInsuranceSchema],
   item : [CoverageEligibilityRequestItemSchema],
   fhirTitle: { type: String, default: 'CoverageEligibilityRequest' },
});

class CoverageEligibilityRequest extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestSchema);
    this._type = 'FHIR::CoverageEligibilityRequest';
  }
};


module.exports.CoverageEligibilityRequestSchema = CoverageEligibilityRequestSchema;
module.exports.CoverageEligibilityRequest = CoverageEligibilityRequest;
