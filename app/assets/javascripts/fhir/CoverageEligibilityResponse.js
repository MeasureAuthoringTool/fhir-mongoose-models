const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityResponseErrorSchema } = require('./CoverageEligibilityResponseError');
const { CoverageEligibilityResponseInsuranceSchema } = require('./CoverageEligibilityResponseInsurance');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EligibilityResponsePurposeSchema } = require('./EligibilityResponsePurpose');
const { EligibilityResponseStatusSchema } = require('./EligibilityResponseStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');

const CoverageEligibilityResponseSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: EligibilityResponseStatusSchema,
  purpose: [EligibilityResponsePurposeSchema],
  patient: ReferenceSchema,
  servicedDate: PrimitiveDateSchema,
  servicedPeriod: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  requestor: ReferenceSchema,
  request: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  insurer: ReferenceSchema,
  insurance: [CoverageEligibilityResponseInsuranceSchema],
  preAuthRef: PrimitiveStringSchema,
  form: CodeableConceptSchema,
  error: [CoverageEligibilityResponseErrorSchema],
  typeName: { type: String, default: 'CoverageEligibilityResponse' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityResponse' },
});

class CoverageEligibilityResponse extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseSchema);
    this.typeName = 'CoverageEligibilityResponse';
    this._type = 'FHIR::CoverageEligibilityResponse';
  }
}

module.exports.CoverageEligibilityResponseSchema = CoverageEligibilityResponseSchema;
module.exports.CoverageEligibilityResponse = CoverageEligibilityResponse;
