const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DetectedIssueEvidenceSchema } = require('./allSchemaHeaders.js');
const { DetectedIssueMitigationSchema } = require('./allSchemaHeaders.js');
const { DetectedIssueSeveritySchema } = require('./allSchemaHeaders.js');
const { DetectedIssueStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DetectedIssueSchema } = require('./allSchemaHeaders.js');

DetectedIssueSchema.add(DomainResourceSchema);
DetectedIssueSchema.remove('id');
DetectedIssueSchema.add({
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
});

module.exports.DetectedIssueSchema = DetectedIssueSchema;
