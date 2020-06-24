const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DetectedIssueEvidenceSchema } = require('./DetectedIssueEvidence');
const { DetectedIssueMitigationSchema } = require('./DetectedIssueMitigation');
const { DetectedIssueSeveritySchema } = require('./DetectedIssueSeverity');
const { DetectedIssueStatusSchema } = require('./DetectedIssueStatus');
const { DomainResourceSchema } = require('./DomainResource');
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

const DetectedIssueSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : DetectedIssueStatusSchema,
   code : CodeableConceptSchema,
   severity : DetectedIssueSeveritySchema,
   patient : ReferenceSchema,
   identifiedDateTime : DateTime,
   identifiedPeriod : PeriodSchema,
   author : ReferenceSchema,
   implicated : [ReferenceSchema],
   evidence : [DetectedIssueEvidenceSchema],
   detail : String,
   reference : String,
   mitigation : [DetectedIssueMitigationSchema],
   fhirTitle: { type: String, default: 'DetectedIssue' },
});

class DetectedIssue extends mongoose.Document {
  constructor(object) {
    super(object, DetectedIssueSchema);
    this._type = 'FHIR::DetectedIssue';
  }
};


module.exports.DetectedIssueSchema = DetectedIssueSchema;
module.exports.DetectedIssue = DetectedIssue;
