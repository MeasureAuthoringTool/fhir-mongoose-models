const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DetectedIssueEvidenceSchema } = require('./DetectedIssueEvidence');
const { DetectedIssueMitigationSchema } = require('./DetectedIssueMitigation');
const { DetectedIssueSeveritySchema } = require('./DetectedIssueSeverity');
const { DetectedIssueStatusSchema } = require('./DetectedIssueStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const DetectedIssueSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: DetectedIssueStatusSchema,
  code: CodeableConceptSchema,
  severity: DetectedIssueSeveritySchema,
  patient: ReferenceSchema,
  identifiedDateTime: PrimitiveDateTimeSchema,
  identifiedPeriod: PeriodSchema,
  author: ReferenceSchema,
  implicated: [ReferenceSchema],
  evidence: [DetectedIssueEvidenceSchema],
  detail: PrimitiveStringSchema,
  reference: PrimitiveUriSchema,
  mitigation: [DetectedIssueMitigationSchema],
  typeName: { type: String, default: 'DetectedIssue' },
  _type: { type: String, default: 'FHIR::DetectedIssue' },
});

class DetectedIssue extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueSchema);
    this.typeName = 'DetectedIssue';
    this._type = 'FHIR::DetectedIssue';
  }
}

module.exports.DetectedIssueSchema = DetectedIssueSchema;
module.exports.DetectedIssue = DetectedIssue;
