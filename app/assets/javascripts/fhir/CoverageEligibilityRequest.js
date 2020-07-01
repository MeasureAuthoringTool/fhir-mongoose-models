const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CoverageEligibilityRequestInsuranceSchema } = require('./CoverageEligibilityRequestInsurance');
const { CoverageEligibilityRequestItemSchema } = require('./CoverageEligibilityRequestItem');
const { CoverageEligibilityRequestSupportingInfoSchema } = require('./CoverageEligibilityRequestSupportingInfo');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EligibilityRequestPurposeSchema } = require('./EligibilityRequestPurpose');
const { EligibilityRequestStatusSchema } = require('./EligibilityRequestStatus');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const CoverageEligibilityRequestSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: EligibilityRequestStatusSchema,
  priority: CodeableConceptSchema,
  purpose: [EligibilityRequestPurposeSchema],
  patient: ReferenceSchema,
  servicedDate: PrimitiveDateSchema,
  servicedPeriod: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  enterer: ReferenceSchema,
  provider: ReferenceSchema,
  insurer: ReferenceSchema,
  facility: ReferenceSchema,
  supportingInfo: [CoverageEligibilityRequestSupportingInfoSchema],
  insurance: [CoverageEligibilityRequestInsuranceSchema],
  item: [CoverageEligibilityRequestItemSchema],
  typeName: { type: String, default: 'CoverageEligibilityRequest' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityRequest' },
});

class CoverageEligibilityRequest extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestSchema);
    this.typeName = 'CoverageEligibilityRequest';
    this._type = 'FHIR::CoverageEligibilityRequest';
  }
}

module.exports.CoverageEligibilityRequestSchema = CoverageEligibilityRequestSchema;
module.exports.CoverageEligibilityRequest = CoverageEligibilityRequest;
